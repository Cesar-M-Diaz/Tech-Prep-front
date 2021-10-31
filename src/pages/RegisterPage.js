import React, { useState } from 'react';
import '../assets/styles/pages/register.css';

function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(registerData);
  }
  function handleInputChange(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name" onChange={handleInputChange} />
      <input type="email" placeholder="Email" name="email" onChange={handleInputChange} />
      <input type="password" placeholder="Password" name="password" onChange={handleInputChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;
