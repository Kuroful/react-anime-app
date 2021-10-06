import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import AnimeItem from './AnimeItem';
import useStyles from './styles';

const List = ({ setCurrentId }) => {
  const animes = useSelector((state) => state.animes);
  const classes = useStyles();

  var animeID = []
  var oneAnime = []
  animes.map((anime) => (
    !animeID.includes(anime.mal_id)) ? (animeID.push(anime.mal_id) && oneAnime.push(anime)) : false)

  return (
    //If there is no posts that are loaded then the loading circle appears
    !animes ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={1}>
        {console.log(oneAnime)}
        {console.log(animeID)}
        {oneAnime.map((anime) => (

          <Grid key={anime._id} item xs={12} sm={6} md={4}>
            <AnimeItem anime={anime} key={anime.mal_id} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default List;