import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateFriend from './UpdateFriend';

function ShowFriends() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = 'http://localhost:8080/api/all';

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (id) => {
    console.log(`Update person with ID: ${id}`);
    <UpdateFriend/>
  };

  return (
    <div className="ShowFriends">
      <h1>Data from API</h1>
      {data.map(item => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>First Name: {item.first_name}</p>
          <p>Last Name: {item.last_name}</p>
          <p>Email: {item.email}</p>
          <p>Birthday: {item.birth}</p>
          <button onClick={() => handleUpdate(item.id)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default ShowFriends;