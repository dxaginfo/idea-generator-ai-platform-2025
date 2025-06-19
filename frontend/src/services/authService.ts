import axios from 'axios';
import { API_URL } from '../config';

const authService = {
  login: async (email: string, password: string) => {
    try {
      // For demo purposes, we'll simulate a successful login
      // In a real app, you would make an API request
      // const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      // return response.data;
      
      // Mock response
      return {
        user: {
          id: '1',
          email,
          name: email.split('@')[0],
        },
        token: 'mock-jwt-token',
      };
    } catch (error) {
      throw error;
    }
  },

  register: async (name: string, email: string, password: string) => {
    try {
      // For demo purposes, we'll simulate a successful registration
      // In a real app, you would make an API request
      // const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
      // return response.data;
      
      // Mock response
      return {
        user: {
          id: '1',
          email,
          name,
        },
        token: 'mock-jwt-token',
      };
    } catch (error) {
      throw error;
    }
  },
};

export default authService;