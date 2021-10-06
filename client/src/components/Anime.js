import React from 'react';
import { Container, AppBar, Typography, Grid, CircularProgress } from '@material-ui/core';
import  useStyles  from './styles';
import TextField from '@material-ui/core/TextField';
import AnimeItem from './AnimeItem';
import eyes from './images/eye.png';

export default function Anime(props){
    const classes = useStyles();
    return(
        <Container maxidth = "lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">The<strong> Anime </strong> Platform</Typography>
                <img className={classes.image} src={eyes} alt="icon" height="60" />
            </AppBar>
            <Container>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={props.HandleSearch} >
                  <TextField className={classes.searchBox}id="outlined-basic" placeholder="Search for Anime" value={props.search} onChange={e => props.SetSearch(e.target.value)}/>
            </form>
            <div className="anime-list">
              <Grid container justify="space-between" spacing={1}>
              {props.animeList.map(anime => (
                <AnimeItem xs={12} sm={6} md={4} lg={3}
                  anime={anime}
                  key={anime.mal_id} />
              ))}
              </Grid>
			      </div>
            </Container>
        

        </Container>
        )
    
}
