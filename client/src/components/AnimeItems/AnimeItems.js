import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import AnimeItem from './AnimeItem/AnimeItem';
import useStyles from './styles';

const AnimeItems = ({ setCurrentId }) => {
  const animes = useSelector((state) => state.animes);
  const classes = useStyles();

  return (
    //If there is no posts that are loaded then the loading circle appears
    !animes.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {animes.map((anime) => (
          
          <Grid key={anime._id} item xs={12} sm={6} md={6}>
            {console.log(anime)}
            <AnimeItem anime={anime} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default AnimeItems;