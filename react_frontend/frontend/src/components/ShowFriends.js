import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import UpdateFriend from './UpdateFriend';

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

  // const handleUpdate = (id) => {
  //   console.log(`Update person with ID: ${id}`);
  //   <UpdateFriend/>
  // };

  return (
    <div className="ShowFriends">
      <h1>SHOW FRIENDS</h1>
      {data.map(item => (
        <div className="Friend">
        <div key={item.id}>
          <ul>
            <li>ID: {item.id}</li>
            <li>First Name: {item.first_name}</li>
            <li>Last Name: {item.last_name}</li>
            <li>Email: {item.email}</li>
            <li>Birthday: {item.birthday}</li>
          </ul>
          {/* <button onClick={() => handleUpdate(item.id)}>Update</button> */}
        </div>
        </div>
      ))}
    </div>
  );
}

export default ShowFriends;
