import { useState, useEffect } from 'react';
import React from 'react';
import UpcomingAnime from '../components/UpcomingAnime';
import Header from '../components/Header';
import Navbar from '../Navbar';





function Upcoming(){
    const [upcomingAnime, SetUpcomingAnime] = useState([]);

    const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
			.then(res => res.json());

		SetUpcomingAnime(temp.top.slice(0, 12));
	}
    useEffect(() => {
		GetTopAnime();
	}, []);

    console.log(upcomingAnime);
    return (
        <div className="App">
            <Navbar/>
            <div className="content-wrap">
            <UpcomingAnime 
                upcomingAnime={upcomingAnime} />
            </div>
        </div>
    );
}

export default Upcoming;
