import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a request to the backend to sign up the user
      const response = await axios.post('/api/signup', { name, username, password });
      
      if (response.status === 201) {
        // Clear form fields upon successful sign-up
        setName('');
        setUsername('');
        setPassword('');
        alert('User created successfully');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Name' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type='email' 
        placeholder='Email' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required 
      />
      <input 
        type='password' 
        placeholder='Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignupForm;