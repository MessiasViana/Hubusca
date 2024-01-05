import api from './axios';
import { Repository } from '../types/repositoriesTypes';

export const searchRepositories = async (login: string): Promise<Repository[] | false> => { 
  try {
    const response = await api.get(`/${login}/repos`);
    const repositories = response.data;

    if (repositories) return repositories;
    
    return false;
  } catch (error) {
    console.log("Erro ao buscar repositorios", error);
    return false;
  }
}
