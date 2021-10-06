import React from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import AnimeItem from './AnimeItem';
import Navbar from '../Navbar';
import useStyles from './AnimeItemStyles';
import Header from './Header';

function UpcomingAnime({upcomingAnime}){
	const classes = useStyles();
    return (
        
			<Container maxidth = "lg">
				<Grid container justify="space-between" spacing={3}>
				{upcomingAnime.map(anime => (
					<AnimeItem xs={12} sm={6} lg={3}
						anime={anime} />
				))}
				</Grid>
			</Container>

        
    )
}

export default UpcomingAnime;