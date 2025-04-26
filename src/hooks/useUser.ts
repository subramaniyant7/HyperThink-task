import { useState, useEffect } from 'react';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const randomId = Math.floor(Math.random() * 10) + 1;
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/${randomId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };
    fetchUser();
  }, []);

  return user;
};