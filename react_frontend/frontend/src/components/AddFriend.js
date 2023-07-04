import React, { useState } from 'react';
import axios from 'axios';

function AddFriend() {
      const [friendData, setFriendData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        birthday: '',
      });
    
      const handleChange = (event) => {
        setFriendData({
          ...friendData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const url = 'http://localhost:8080/api/add';
    
        try {
          const response = await axios.post(url, null, { params: friendData });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <div className='AddFriend'>
            <h2>ADD NEW FRIEND</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name*: 
            <input
              type="text"
              name="first_name"
              value={friendData.first_name}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={friendData.last_name}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={friendData.email}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Birth Date*: 
            <input
              type="date"
              name="birthday"
              value={friendData.birthday}
              onChange={handleChange}
            />
          </label>
          <br/>
          <button type="submit" className="Button">Add</button>
        </form>
        </div>
      );
}

export default AddFriend;
