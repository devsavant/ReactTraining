import { FETCH_GALLERY_SUCCESS } from '../actionTypes/gallery';
const axios = require('axios');

export const fetchGallery = () => async dispatch => {
  try {
    const response = await axios.get('https://api.jikan.moe/v3/search/anime?q=dragonball%20z');
    dispatch(fetchGallerySuccess(response.data.results));

  } catch (error) {
    console.error(error);
  }
};

const fetchGallerySuccess = (gallery) => ({
  type: FETCH_GALLERY_SUCCESS,
  gallery,
});


