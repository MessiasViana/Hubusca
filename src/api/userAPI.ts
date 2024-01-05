import api from './axios';
import { User } from '../types/userTypes';

export const searchUser = async (name: string): Promise<User | false> => { 
  try {
    const response = await api.get(`/${name}`);
    const user = response.data;

    if (user) return user;
    
    return false;
  } catch (error) {
    console.log("Erro ao buscar usuario", error)
    return false;
  }
}
