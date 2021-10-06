import React from 'react';
import Anime from '../components/Anime';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../Navbar';

function Home(){

    const [animeList, SetAnimeList] = useState([]);
    const [search, SetSearch] = useState("");

    const FetchAnime = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
            .then(res => res.json());

        SetAnimeList(temp.results);
    }

    const HandleSearch = e => {
        e.preventDefault();

        FetchAnime(search);
    }

    return (
        <div className="App">
            <Navbar/>
            <Anime search={search} HandleSearch={HandleSearch} SetSearch={SetSearch} animeList={animeList}/>
        </div>
    )
}

export default Home;
