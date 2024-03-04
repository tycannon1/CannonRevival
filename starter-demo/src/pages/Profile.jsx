
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavorites, setFavorites } from '../redux/actions.js'; // Import the action creators

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites); // Add favorites state
  const dispatch = useDispatch();

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
        payload: res.data.userId
      });
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

  const sessionCheck = async () => {
    const res = await axios.get("/api/session-check");
    if (res.data.success) {
      dispatch({
        type: "USER_AUTH",
        payload: res.data.userId
      });
      
    }
  }

  const fetchFavorites = async () => { // Function to fetch user's favorites
    const res = await axios.get(`/api/user/favorites`);
    console.log(res.data)
    if (res.data[0]) {
      dispatch({
        type: "SET_FAVORITES",
        payload: res.data
      });
    }
  }

  useEffect(() => {
    sessionCheck();
   
  }, []); 

  useEffect(() => {
      fetchFavorites(); // Fetch user's favorites if user is logged in
    
  }, [userId]); // Run effect whenever userId changes


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
          <li key={favorite.productId}>{favorite.product.productName}</li>
        ))}
      </ul>
    </>
  );
};

export default Profile;