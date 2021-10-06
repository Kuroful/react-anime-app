import React, {useState} from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import useStyles from './AnimeItemStyles';

import { addAnimeItem } from '../actions/anime';

import { useDispatch} from 'react-redux';



export default function AnimeItem({anime}){
    const animeListItem = { title: anime.title, url: anime.url, image_url: anime.image_url, mal_id: anime.mal_id}

 
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                title={anime.title}
                image={anime.image_url}
                />
            <CardContent className={classes.title}>
                <Typography gutterBottom variant="h5" component="h2"> <Link href={anime.url} > {anime.title}  </Link> </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(addAnimeItem(animeListItem))}>
                        Add to List
                </Button>
                {/*<Button size="small" color="primary"  onClick={() => {}}>
                        Delete from List
                </Button>*/}
            </CardActions>
            </CardActionArea>
        </Card>
    )
}

