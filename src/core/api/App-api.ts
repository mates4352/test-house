import { instance } from './Instance-api';

export const AppApi = {
  getMe: async () => {
    return await instance.post<any>('auth/me');
  },
};
