import React, { useState } from 'react';
import axios from 'axios';

function DeleteFriend() {
  const [friendId, setFriendId] = useState('');

  const handleChange = (event) => {
    setFriendId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = `http://localhost:8080/api/delete?id=${friendId}`;

    try {
      const response = await axios.delete(url);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='DeleteFriend'>
    <h2>DELETE FRIEND BY ID</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Friend ID*:
        <input
          type="number"
          value={friendId}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button type="submit" className="Button">Delete</button>
    </form>
    </div>
  );
}

export default DeleteFriend;
