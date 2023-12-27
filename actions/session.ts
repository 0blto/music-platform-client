export const setSession = (accessToken: string, refreshToken: string) => {
    if (typeof window !== 'undefined')
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
 };
 
export const getAccessToken = () => {
    if (typeof window !== 'undefined') 
       return localStorage.getItem('accessToken');
 };

export const getRefreshToken = () => {
    if (typeof window !== 'undefined') 
       return localStorage.getItem('refreshToken');
 };

export const setSessionUser = (username: string) => {
   if (typeof window !== 'undefined')
      localStorage.setItem('username', username);
 }

 export const getSessionUser = () => {
   if (typeof window !== 'undefined')
      return localStorage.getItem('username');
 }

 export const clearSession = () => {
   if (typeof window !== 'undefined')
      localStorage.clear();
 }

 export const setSessionArtist = (nickname: string) => {
   if (typeof window !== 'undefined')
      localStorage.setItem('nickname', nickname);
 }

 export const getSessionArtist = () => {
   if (typeof window !== 'undefined')
      return localStorage.getItem('nickname');
 }