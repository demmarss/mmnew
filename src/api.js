import axios from 'axios'

axios.defaults.baseURL = 'http://www.moorheadmosque.org/api/';

axios.defaults.headers.post['Content-Type'] = 'application/json';

// Get solahTime
export async function getSolahTime() {
    const response = await axios.get(`/solahTimes`);
     return response.data;
  }

// Creater solahTime
export async function createSolahTime(user) {
    const response = await axios.post(`/solahTimes`, user);
     return response.data;
  }
