import axios from 'axios';

export const fetchPictures = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api';
  const OPTIONS = `q=${query}&page=${page}&key=36042595-5d91997ab80e6f8b8f8cfdfa6&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
  return response.data;
};
