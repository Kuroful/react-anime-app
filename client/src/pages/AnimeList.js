import React, { useState, useEffect } from 'react';
import { Grow, Grid, CircularProgress, Container } from '@material-ui/core';

import List from '../components/List.js';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import { getAnime } from '../actions/anime';





const AnimeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);


  return (
      <div class = "App">
          <Navbar/>
          <Container>
            <List/>
          </Container>
      </div>
  )
};

export default AnimeList;