import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const register = (name, email, password) => {
  return axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
    password_confirmation: password
  });
};

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, {
    email,
    password
  }).then(response => {
    if (response.data.token) {
      localStorage.setItem('visiteur', JSON.stringify(response.data));
    }
    return response.data;
  });
};

export const logout = () => {
  return axios.post(`${API_URL}/logout`).then(response => {
    localStorage.removeItem('visiteur');
    return response.data;
  });
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('visiteur'));
};
