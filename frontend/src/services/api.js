import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT) || 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth tokens (Phase 2)
api.interceptors.request.use(
  (config) => {
    // Add auth token logic here in Phase 2
    // const token = localStorage.getItem('auth_token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors here in Phase 2
    if (error.response?.status === 401) {
      // Handle unauthorized
      console.log('Unauthorized - redirect to login in Phase 2');
    }
    return Promise.reject(error);
  }
);

// Health check API
export const healthAPI = {
  checkHealth: () => api.get('/health'),
  checkDetailedHealth: () => api.get('/health/detailed'),
};

// Placeholder APIs for Phase 2
export const authAPI = {
  // login: (credentials) => api.post('/auth/login', credentials),
  // logout: () => api.post('/auth/logout'),
  // refresh: () => api.post('/auth/refresh'),
};

export const patientsAPI = {
  // getPatients: (params) => api.get('/patients', { params }),
  // getPatient: (id) => api.get(`/patients/${id}`),
  // createPatient: (data) => api.post('/patients', data),
  // updatePatient: (id, data) => api.put(`/patients/${id}`, data),
  // deletePatient: (id) => api.delete(`/patients/${id}`),
};

export const vitalsAPI = {
  // getVitals: (patientId, params) => api.get(`/patients/${patientId}/vital-signs`, { params }),
  // submitVitals: (data) => api.post('/vital-signs', data),
  // submitBatchVitals: (data) => api.post('/vital-signs/batch', data),
};

export const alertsAPI = {
  // getAlerts: (params) => api.get('/alerts', { params }),
  // acknowledgeAlert: (id, data) => api.put(`/alerts/${id}`, data),
};

export default api;