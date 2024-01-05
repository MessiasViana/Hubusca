import axios from 'axios';

const BASE_URL_API = "https://api.github.com/users/";

const instance = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json'
  }
});

const searchUser = async (name: string): Promise<User | false> => { 
  try {
    const user = await instance.get(`/${name}`);

    if (user) return user.data;

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default searchUser;

