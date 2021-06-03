import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/auth/user/register';
    return axiosClient.get(url, data);
  },
};

export default userApi;
