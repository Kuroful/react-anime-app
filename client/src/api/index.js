import axios from 'axios';

const url = `https://anime-react-app-project.herokuapp.com/anime`;

export const fetchAnime = () => axios.get(url);

export const addAnimeItem = (animeListItem) => axios.post(url, animeListItem);

export const updateAnimeItem = (id, updatedAnime) => axios.patch(`${url}/${id}`, updatedAnime);

export const deleteAnimeItem = (id) => axios.delete(`${url}/${id}`);