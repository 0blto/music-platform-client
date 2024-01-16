import { getAccessToken, getRefreshToken, getSessionUser } from '@/actions/session';
import { create } from 'zustand';

interface UserStore {
  name: string;
  token: string;
  refreshToken: string;
  setName: Function
  setToken: Function
  setRefreshToken: Function
}

const useUser = create<UserStore>((set) => ({
  name: `${getSessionUser()}`,
  token: `${getAccessToken()}`,
  refreshToken: `${getRefreshToken()}`,
  setName: (name: string) => set({ name }),
  setToken: (token: string) => set({ token }),
  setRefreshToken: (refreshToken: string) => set({ refreshToken }),
}));

export default useUser;