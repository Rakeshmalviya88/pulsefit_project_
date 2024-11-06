import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': 'ccc063bb5emsh134f70931ac8cc9p14346bjsnca198af32df0',
  },
};

// export const youtubeOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//     'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//   },
// };

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();  

  return data;
};



// my added

const API_URL = 'http://localhost:5000/api'; 

export const login = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })        // jo chiz bhejni hein
  });
  return await response.json(); 
};


export const signup = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })        // jo chiz bhejni hein
  });
  return await response.json(); 
};

// without axios for tracker:


// export const addEntry = async (userId, weight, calories, waterIntake, sleepDuration) => {
//   const response = await fetch(`${API_URL}/tracker/add`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ userId, weight, calories, waterIntake, sleepDuration })
//   });
//   return await response.json(); // Parse and return the JSON response
// };


// export const deleteLatestEntry = async (userId) => {
//   const response = await fetch(`${API_URL}/tracker/${userId}/delete-latest`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ userId })
//   });
//   return await response.json(); // Parse and return the JSON response
// };

// export const getProgressData = async (userId) => {
//   const response = await fetch(`${API_URL}/tracker/${userId}/data`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   return await response.json(); // Parse and return the JSON response
// };


// with axios for tracker

export const addEntry = async (userId, weight, calories, waterIntake, sleepDuration) => {
  return await axios.post(`${API_URL}/tracker/add`, { userId, weight, calories, waterIntake, sleepDuration });
};

export const deleteLatestEntry = async (userId) => {
  return await axios.delete(`${API_URL}/tracker/delete-latest`, { data: { userId } });
};

export const getProgressData = async (userId) => {
  return await axios.get(`${API_URL}/tracker/${userId}/data`);
};

export const deleteAllEntries = async (userId) => {
  return await axios.delete(`${API_URL}/tracker/delete-all`, { data: { userId } });
};
