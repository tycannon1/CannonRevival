import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a request to the backend to update user info
      const response = await axios.post('/api/update-profile', { name, username, password });
      
      if (response.status === 200) {
        // Optionally, you can display a success message or update the UI accordingly
        alert('User information updated successfully');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
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
        placeholder='New Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type='submit'>Update Profile</button>
    </form>
  );
};

export default UpdateProfile;