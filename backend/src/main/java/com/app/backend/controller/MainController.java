package com.app.backend.controller;

import com.app.backend.model.Friend;
import com.app.backend.repository.FriendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/api")
public class MainController {
    @Autowired
    private FriendRepository friendRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/add")
    public @ResponseBody String addNewFriend(@RequestParam String first_name, @RequestParam String last_name, @RequestParam String email, @RequestParam String birth) {
//        Friend new_friend = new Friend(1, first_name, last_name, email, birth);
        Friend new_friend = new Friend();
        new_friend.setFirst_name(first_name);
        new_friend.setLast_name(last_name);
        new_friend.setEmail(email);
        new_friend.setBirth(birth);
        friendRepository.save(new_friend);
        return "Saved";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path="/delete")
    public @ResponseBody String deleteFriendById(@RequestParam Integer id) {
        friendRepository.deleteById(id);
        return "Deleted";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Friend> getAllFriends() {
        return friendRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(path="/update")
    public @ResponseBody String updateFriend(@RequestParam Integer id, @RequestParam String first_name, @RequestParam String last_name, @RequestParam String email, @RequestParam String birth) {
        Friend updated_friend = friendRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Friend not found"));
        updated_friend.setFirst_name(first_name);
        updated_friend.setLast_name(last_name);
        updated_friend.setEmail(email);
        updated_friend.setBirth(birth);
        friendRepository.save(updated_friend);

        return "Updated";
    }
}
