import axios from 'axios';

const API_URL = '(link unavailable)'; 
const API_KEY = 'your-api-key'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}` 
  }
});

const API = {
  // Event API endpoints
  getEvents: async () => {
    const response = await api.get('/events');
    return response.data;
  },
  getEvent: async (eventId: number) => {
    const response = await api.get(`/events/${eventId}`);
    return response.data;
  },
  bookEvent: async (eventId: number, bookingData: any) => {
    const response = await api.post(`/events/${eventId}/bookings`, bookingData);
    return response.data;
  },

  // Add more API endpoints as needed
};

export default API;
