import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getAnime = () => async (dispatch) => {
    try {
      const { data } = await api.fetchAnime();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


  

export const addAnimeItem = (animeListItem) => async (dispatch) => {
    try {
        const { data } = await api.addAnimeItem(animeListItem);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
