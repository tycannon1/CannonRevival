
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavorites, setFavorites } from '../redux/actions.js'; // Import the action creators
import SignupForm from '../components/SignupForm';
import UpdateProfile from '../components/updateProfile.jsx';
import SocialMediaForm from '../components/SocialMediaForm';

// import SocialMediaHandles from '../components/SocialMediaHandles'; // Import SocialMediaHandles component

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites); // Add favorites state
  const socialMedia = useSelector((state) => state.socialMedia); // Add social media handles state
  const dispatch = useDispatch();


// const fetchSocialMediaHandles = async () => {
//     try {
//       const response = await axios.get(`/api/social-media/${userId}`);
//       dispatch({
//         type: 'SET_SOCIAL_MEDIA_HANDLES',
//         payload: response.data,
//       });
//     } catch (error) {
//       console.error('Error fetching social media handles:', error);
//     }
//   };

  // useEffect(() => {
  //   if (userId) {
  //     fetchSocialMediaHandles();
  //   }
  // }, [userId]);





  const handleLogin = async (e) => {
    e.preventDefault();
    const bodyObj = {
      username: username,
      password: password,
    };
    const res = await axios.post("/api/login", bodyObj);
    if (res.data.success) {

      dispatch({
        type: "USER_AUTH",
        payload: res.data.user.userId
      });
      // another dispatch to send the userFavorites to redux store
      // res.data.userFavorites
      dispatch({
        type: "SET_FAVORITES",
        payload: res.data.user.favorites
      })

      // another dispatch to send user socialMedia array
      dispatch({
        type: "SET_SOCIAL_MEDIA",
        payload: res.data.user.socialMedia
      })

      setUsername("");
      setPassword("");
    }
    alert(res.data.message);
  }

  const handleLogout = async () => {
    const res = await axios.get("/api/logout");
    if (res.data.success) {
      dispatch({
        type: "LOGOUT",
      });
      dispatch(clearFavorites()); // Dispatch action to clear favorites from Redux store
    }
  }

  return (
    <>
      <nav>
        <h1>PROFILE</h1>
        {userId ?
          <button onClick={handleLogout}>Logout</button> :
          <button>Login</button>
        }
      </nav>
      {!userId &&
        <form onSubmit={handleLogin}>
          <input 
            type='text' 
            value={username} 
            placeholder='Username' 
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type='submit'
          />
        </form>
      }
      {userId && 
        <h3>Welcome, user #{userId}</h3>
      }
    


      
      <h3>Favorites:</h3>
      <ul>
        {favorites.map(favorite => (
          // console.log(favorite.product.productName)
          <li key={favorite.productId}>{favorite.product.productName}</li>
        ))}
    
        
      </ul>
      <h3>Social Media Handles: </h3>
      <ul>
        {socialMedia.map(handle => (
          
          <li key={handle.socialMediaId}>Platform: {handle.platform} Handle: {handle.handle}</li>
        ))}
      </ul>


      <h3>Social Media Handles:</h3>
      <SocialMediaForm />
      <h3>Update Profile</h3>
          <UpdateProfile />
      <h3>Sign Up</h3>
      <SignupForm />
    </>
  );
};

export default Profile;