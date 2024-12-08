
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

  const [showSocialMediaForm, setShowSocialMediaForm] = useState(false);
  const [showUpdateProfileForm, setShowUpdateProfileForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleSocialMediaButtonClick = () => {
    setShowSocialMediaForm(!showSocialMediaForm);
  };

  const handleUpdateProfileButtonClick = () => {
    setShowUpdateProfileForm(!showUpdateProfileForm);
  };

  const handleSignupButtonClick = () => {
    setShowSignupForm(!showSignupForm);
  };

  return (
    <>
      <div class="login-container">
        <h1>PROFILE</h1>
        {userId ?
          <button onClick={handleLogout}>Logout</button> :
          <button type="button" onClick={handleLogin}>Login</button>
        }
      
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
          {/* <input 
            type='submit'
          /> */}
        </form>
      }
      </div>
      {/* {userId && 
        <h3>Welcome, user #{userId.name}</h3>
      } */}
    


      <div class="content-container">
      <h3 className='prodHead'>FAVORITES:</h3>
      
        <ul className="prodOver">
        
        
          {favorites.map(favorite => (
            // console.log(favorite.product.productName)
            <li key={favorite.productId}> 
              <div className="shop-cards-container2">
                <img src={favorite.product.imageUrl} alt={favorite.product.productName} />
                <h3>{favorite.product.productName}</h3>
                <p>${favorite.product.price}</p>
                <p>{favorite.product.description}</p>
              </div>
          </li>
          ))}
      
          
          </ul>
          </div>
          
          <ul className='social-media-list'>
          <h3>SOCIAL MEDIA HANDLES:</h3>
            {socialMedia.map(handle => (
              <div>
              <li key={handle.socialMediaId}>{handle.platform}: {handle.handle}</li>
              </div>
            ))}
          </ul>
      


      {/* <h3>Social Media Handles:</h3>
      <SocialMediaForm />
      <h3>Update Profile</h3>
          <UpdateProfile />
      <h3>Sign Up</h3>
      <SignupForm /> */}

      
      <div class="buttons-container">
      {/* Social Media Form Button */}
      <button onClick={handleSocialMediaButtonClick}>
        {showSocialMediaForm ? 'Done' : 'Add Social Media'}
      </button>
      {showSocialMediaForm && <SocialMediaForm />}

      {/* Update Profile Form Button */}
      <button onClick={handleUpdateProfileButtonClick}>
        {showUpdateProfileForm ? 'Done' : 'Update Profile'}
      </button>
      {showUpdateProfileForm && <UpdateProfile />}

      {/* Sign Up Form Button */}
      <button onClick={handleSignupButtonClick}>
        {showSignupForm ? 'Done' : 'Sign Up'}
      </button>
      {showSignupForm && <SignupForm />}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Global Thrift Network</p>
        <p><a href="mailto:info@globalthrift.com">info@globalthrift.com</a></p>
        <p>Lehi, Utah</p>
      </footer>
    </>
  );
};

export default Profile;