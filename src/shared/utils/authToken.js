export const removeJwtToken = () => localStorage.removeItem('token');

export const setJwtToken = token => localStorage.setItem('token', token);

export const getJwtToken = () => localStorage.getItem('token');
