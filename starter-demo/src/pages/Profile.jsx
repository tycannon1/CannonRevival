// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'

// export default function Profile() {
//     // To login, I need a user to enter their username + password
//   // I should keep track of these with state values, and then when the form is submitted, 
//   // send those state values to my server as a req.body
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   // const [userId, setUserId] = useState(null)

//   // to use Redux, we need to "subscribe" (useSelector()) to the store
//   const userId = useSelector((state) => state.userId)

//   const dispatch = useDispatch()

//   // how to handle the submission of the form? Create a function that the form submission invokes
//   const handleLogin = async (e) => {
//     e.preventDefault()

//     // need to create my req.body object:
//     const bodyObj = {
//       username: username,
//       password: password,
//     }

//     // now send this data to our /login endpoint to validate:
//     const res = await axios.post("/api/login", bodyObj)

//     // get response and save the userId to the redux store
//     if (res.data.success) {
//       // what do I do with the userId that returned to me?
//       // dispatch the userId to the store
//       dispatch({
//         type: "USER_AUTH",
//         payload: res.data.userId
//       })
      
//       setUsername("")
//       setPassword("")
//     } 
    
//     alert(res.data.message)

//   }

//   // function to log out - simply call the server endpoint, and then reset state value userId to null
//   const handleLogout = async () => {
//     const res = await axios.get("/api/logout")

//     if (res.data.success) {
//       // setUserId(null)
//       dispatch({
//         type: "LOGOUT",
//       })
//     }
//   }

//   // On initial render, I want this component to determine if there is a userId saved in the server's req.session object
//   // 1. define a function to do it
//   const sessionCheck = async () => {
//     const res = await axios.get("/api/session-check")

//     if (res.data.success) {
//       // setUserId(res.data.userId)
//       dispatch({
//         type: "USER_AUTH",
//         payload: res.data.userId
//       })
//     } 
//   }
//   // 2. invoke that function on initial render only (with a useEffect() hook)
//   // useEffect(callback, optionalDependencyArray)
//   // if the dependencyArray is not provided, useEffect will run on EVERY render
//   // if the dependencyArray is empty ([]), then this tells useEffect to ONLY run on the INITIAL render
//   // if the dependencyArray contains values, useEffect will run each time one of those values is changed/used
//   useEffect(() => {
//     sessionCheck()
//   }, [])


//   return (
//     <>
//       <nav>
//         <h1>PROFILE</h1>
   
//         {userId &&
//           <button onClick={handleLogout}>Logout</button>
//         }
//         {!userId &&
//           <button>Login</button>
//         }
//       </nav>
//       {!userId &&
//         <form onSubmit={handleLogin}>
//           <input 
//             type='text' 
//             value={username} 
//             placeholder='Username' 
//             onChange={(e) => setUsername(e.target.value)}
//             />
//           <input 
//             type='password'
//             value={password}
//             placeholder='Password'
//             onChange={(e) => setPassword(e.target.value)}
//             />
//           <input 
//             type='submit'
//             />
//         </form>
//       }
//       {userId && 
//         <h3>Welcome, user # {userId}</h3>
//       }
//       <h3>Favorites:</h3>
//       <ul>
//         {user.favorites.map(product => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

// const Profile = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const userId = useSelector((state) => state.userId);
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const bodyObj = {
//       username: username,
//       password: password,
//     };
//     const res = await axios.post("/api/login", bodyObj);
//     if (res.data.success) {
//       dispatch({
//         type: "USER_AUTH",
//         payload: res.data.userId
//       });
//       setUsername("");
//       setPassword("");
//     }
//     alert(res.data.message);
//   }

//   const handleLogout = async () => {
//     const res = await axios.get("/api/logout");
//     if (res.data.success) {
//       dispatch({
//         type: "LOGOUT",
//       });
//     }
//   }

//   const sessionCheck = async () => {
//     const res = await axios.get("/api/session-check");
//     if (res.data.success) {
//       dispatch({
//         type: "USER_AUTH",
//         payload: res.data.userId
//       });
//       const userRes = await axios.get(`/api/user/${res.data.userId}`); // Assuming there's an endpoint to fetch user data
//       if (userRes.data.success) {
//         dispatch({
//           type: "UPDATE_USER",
//           payload: userRes.data.user // Assuming the response contains user data including favorites
//         });
//       }
//     }
//   }

//   useEffect(() => {
//     sessionCheck();
//   }, []);

//   return (
//     <>
//       <nav>
//         <h1>PROFILE</h1>
//         {userId ?
//           <button onClick={handleLogout}>Logout</button> :
//           <button>Login</button>
//         }
//       </nav>
//       {!userId &&
//         <form onSubmit={handleLogin}>
//           <input 
//             type='text' 
//             value={username} 
//             placeholder='Username' 
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input 
//             type='password'
//             value={password}
//             placeholder='Password'
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input 
//             type='submit'
//           />
//         </form>
//       }
//       {userId && 
//         <h3>Welcome, user #{userId}</h3>
//       }
//       <h3>Favorites:</h3>
//       <ul>
//       {userId && userId !== null && user && user.favorites && user.favorites.map(product => (
//     <li key={product.id}>{product.name}</li>
//   ))}
//       </ul>
//     </>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.user);
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
    }
  }

  const sessionCheck = async () => {
    const res = await axios.get("/api/session-check");
    if (res.data.success) {
      dispatch({
        type: "USER_AUTH",
        payload: res.data.userId
      });
      // Fetch user data including favorites
      const userRes = await axios.get(`/api/user/${res.data.userId}`); // Assuming there's an endpoint to fetch user data
      if (userRes.data.success) {
        dispatch({
          type: "UPDATE_USER",
          payload: userRes.data.user // Assuming the response contains user data including favorites
        });
      }
    }
  }

  useEffect(() => {
    sessionCheck();
  }, []);

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
      {userId && userId !== null && user && user.favorites && user.favorites.map(product => (
        <li key={product.productId}>{product.productName}</li> // Assuming the product object contains productName
      ))}
      </ul>
    </>
  );
};

export default Profile;