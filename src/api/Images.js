import axios from 'axios';
const API_KEY = '39895940-0f892e574934054a3d8471af3';

axios.defaults.baseURL = 'https://pixabay.com/';

export async function getImages(query, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });

  return await axios.get('/api/', { params });
}
