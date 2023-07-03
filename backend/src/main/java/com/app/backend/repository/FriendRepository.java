package com.app.backend.repository;

import com.app.backend.model.Friend;
import org.springframework.data.repository.CrudRepository;

public interface FriendRepository extends CrudRepository<Friend, Integer> {
}
