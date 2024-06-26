import axios from 'axios';
const baseURL = `${import.meta.env.VITE_API}/api`;

// make sure we send the token to backend everytime there's an API call for matches
const setAuthorizationHeaders = () => {
  axios.interceptors.request.use(config => {
    // retrieve the token from localStorage
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  });
};

setAuthorizationHeaders();

// API CALLS FOR PROFILES & MATCHES

// GET one Profile by User & Match
export const getMatchedProfile = async (userId, matchId) => {
  try {
    return await axios.get(`${baseURL}/profiles/${userId}/${matchId}`);
  } catch (error) {
    console.error('Error fetching all profiles:', error);
    throw error;
  }
};

// GET one Profile by Profile ID
export const getProfile = id => {
  return axios.get(`${baseURL}/profiles/${id}`);
};

// POST one Profile
export const addProfile = profile => {
  return axios.post(`${baseURL}/profiles`, profile);
};

// PUT one Profile
export const updateProfile = updatedProfile => {
  return axios.put(`${baseURL}/profiles/${updatedProfile._id}`, updatedProfile);
};

// GET Matches per User
export const getAllUserMatches = userId => {
  return axios.get(`${baseURL}/matches/${userId}`);
};

// POST Matches by Client ID
export const addMatches = clientId => {
  return axios.post(`${baseURL}/matches`, { clientId });
};

// PUT one Match
export const updateMatch = updatedMatch => {
  return axios.put(`${baseURL}/matches/${updatedMatch._id}`, updatedMatch);
};

// DELETE one Match by ID
export const deleteMatch = id => {
  return axios.delete(`${baseURL}/matches/${id}`);
};

// GET User by ID
export const getUser = id => {
  return axios.get(`${baseURL}/users/${id}`);
};
