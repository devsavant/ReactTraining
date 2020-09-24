import { FETCH_GALLERY_SUCCESS } from '../actionTypes/gallery';
import { GALLERY_INITIAL_STATE } from '../components/constants';

const galleryReducer = (state = GALLERY_INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        list: action.gallery,
      };
    default:
      return state;
  }
};

export default galleryReducer;
