import React, { useState } from 'react';
import axios from 'axios';

function AddFriend() {
      const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        birthday: '',
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const url = 'http://localhost:8080/api/add';
    
        try {
          const response = await axios.post(url, null, { params: formData });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <div className='AddFriend'>
            <h1>ADD NEW FRIEND</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br/>
          <label>
            Birth Date:
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
            />
          </label>
          <br/>
          <button type="submit">Submit</button>
        </form>
        </div>
      );
}

export default AddFriend;
