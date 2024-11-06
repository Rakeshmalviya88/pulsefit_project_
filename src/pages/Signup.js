// import React, { useState } from 'react';
// import { signup } from '../services/api';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await signup(username, password);
//       if (response.data.success) {
//         alert('Signup successful! You can now log in.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('User already exists. Please Log in');
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <h2>Signup</h2>
//       <input 
//         type="text" 
//         placeholder="Username" 
//         value={username} 
//         onChange={(e) => setUsername(e.target.value)} 
//         required 
//       />
//       <input 
//         type="password" 
//         placeholder="Password" 
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)} 
//         required 
//       />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;


// styling :


import React, { useState } from 'react';
// import { signup } from '../services/api';
import { signup } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(username, password);
      if (response.success) {                                // response.data.successs if axios used
        alert('Signup successful! You can now log in.');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      alert('User already exists. Please log in.');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSignup}>
      <h2 className="signup-title">Signup</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="signup-input"
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="signup-input"
        required 
      />
      <button type="submit" className="signup-button">Signup</button>
    </form>
  );
};

export default Signup;
