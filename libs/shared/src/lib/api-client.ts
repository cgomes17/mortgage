import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import toast from 'react-hot-toast';

const client = axios.create({
  baseURL: 'https://nesto-fe-exam.vercel.app/api',
  headers: {
    'X-Nesto-Candidat': 'Cesar Gomes',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = async <T = any>(options: AxiosRequestConfig) => {
  return client<T>(options)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      toast.error(error.message);
      return Promise.reject(error);
    });
};
