import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const SocialMediaForm = () => {
  const [platform, setPlatform] = useState('');
  const [handle, setHandle] = useState('');
  const userId = useSelector((state) => state.userId);

  const dispatch = useDispatch()

  const getUserId = () => {
    return userId;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      // const userId = getUserId();
      // Send a request to the backend to save social media handle
      const response = await axios.post('/api/social-media', { platform, handle });
      
      if (response.status === 201) {
        // Clear form fields upon successful submission
        console.log(response.data.newHandle)
        dispatch({
          type: 'ADD_TO_SOCIAL_MEDIA',
          payload: response.data.newHandle
        })
        setPlatform('');
        setHandle('');
        alert('Social media handle added successfully');
      }
    } catch (error) {
      console.error('Error adding social media handle:', error);
      alert('Error adding social media handle');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Platform' 
        value={platform} 
        onChange={(e) => setPlatform(e.target.value)} 
        required 
      />
      <input 
        type='text' 
        placeholder='Handle' 
        value={handle} 
        onChange={(e) => setHandle(e.target.value)} 
        required 
      />
      <button type='submit'>Save</button>
    </form>
  );
};

export default SocialMediaForm;