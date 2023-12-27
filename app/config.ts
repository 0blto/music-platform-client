export const SERVER_IMG = 'http://localhost:8181/img';
export const SERVER_AUDIO = 'http://localhost:8181/audio';
export const SERVER_API = 'http://localhost:8181/v1';

export const authorizerHeaders = (token: string) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
}

export const unauthorizerHeaders = (): Object => {
    return {
        'Content-Type': 'application/json'
      }
}
