import axios from 'axios';

import { API_URL } from '../config';

const axiosInstance = axios.create({ baseURL: API_URL });

export const apiService = {
  async get({ url }: { url: string }) {
    const { data: fetchedData } = await axiosInstance.get(url);
    return fetchedData;
  },

  async post({ url, data }: { url: string; data?: any }) {
    const { data: fetchedData } = await axiosInstance.post(url, data);
    return fetchedData;
  },

  async put({ url, data }: { url: string; data: any }) {
    const { data: fetchedData } = await axiosInstance.put(url, data);
    return fetchedData;
  },

  async delete({ url }: { url: string }) {
    const { data: fetchedData } = await axiosInstance.delete(url);
    return fetchedData;
  },
};
