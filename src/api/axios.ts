import axios from 'axios';
import { User } from '../types/userTypes';

const BASE_URL_API = "https://api.github.com/users/";

const instance = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json'
  }
});

const searchUser = async (name: string): Promise<User | false> => { 
  try {
    const response = await instance.get(`/${name}`);
    const user = response.data;

    if (user) return user;
    
    return false;
  } catch (error) {
    console.log("Erro ao buscar usuario", error)
    return false;
  }
}

const searchRepositories = async (name: string): Promise<User | false> => { 
  try {
    const response = await instance.get(`/${name}/repos`);
    const repositories = response.data;

    if (repositories) return repositories;
    
    return false;
  } catch (error) {
    console.log("Erro ao buscar repositorios", error)
    return false;
  }
}

export default searchUser;



