import React, { useState } from 'react';
import axios from 'axios';

function UpdateFriend() {
  const [formData, setFormData] = useState({
    id: '',
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

    const url = `http://localhost:8080/api/update?id=${formData.id}`;

    const data = {
      id: formData.id,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      birthday: formData.birthday,
    };

    try {
      const response = await axios.put(url, null, { params: data });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='UpdateFriend'>
    <h2>UPDATE FRIEND BY ID</h2>
    <form onSubmit={handleSubmit}>
      <label>
        ID*:
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </label>
      <br/>
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
        Birthday:
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button type="submit" className="Button">Update</button>
    </form>
    </div>
  );
}

export default UpdateFriend;
