import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGallery } from '../actions/gallery';
import { useSelector } from 'react-redux';
import { getGallery } from '../selectors/gallery';
import GridListView from './GridListView';

const Gallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(getGallery);

  useEffect(() => {
      dispatch(fetchGallery());
  }, [dispatch]);
  
  return (
    <div>
      <GridListView data={gallery}/>
    </div>
  );
};

export default Gallery
