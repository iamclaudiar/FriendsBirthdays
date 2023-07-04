import React, { useState } from 'react';
import axios from 'axios';

function UpdateFriend() {
  const [formData, setFormData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    birth: '',
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
      birth: formData.birth,
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
            <h1>UPDATE FRIEND BY ID</h1>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Birth Date:
        <input
          type="date"
          name="birth"
          value={formData.birth}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
    </div>
  );
}

export default UpdateFriend;
