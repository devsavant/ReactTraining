import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  }
}));

const GridListView = ({data}) => {
  const classes = useStyles();
  
  const renderGallery = () => {
    return <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {data.map((item) => (
          <GridListTile key={item.mal_id}>
            <img src={item.image_url} alt={item.title} />
            <GridListTileBar
              title={item.title}
              subtitle={<span>{item.synopsis}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  };

  
  return (
    <>
      {renderGallery()}
     </>
  );
  
};

export default GridListView
