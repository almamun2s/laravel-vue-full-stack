import axios from 'axios';
import router from './router';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  withXSRFToken: true,
});

// Add a request interceptor to include the token in the headers (Token based authorization)
// axiosClient.interceptors.request.use((config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

// }, error => {
//   return Promise.reject(error);
// }));

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    // Handle unauthorized access, e.g., redirect to login page
    // window.location.href = '/login';
    router.push({name: 'Login'});
  }
  // return Promise.reject(error);
  throw error;
});

export default axiosClient;