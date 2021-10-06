import React, {useState} from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import useStyles from './styles';



import { useDispatch} from 'react-redux';



export default function AnimeItem({anime}){

 
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
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2"> <Link href={anime.url} > {anime.title}  </Link> </Typography>
            </CardContent>

            </CardActionArea>
        </Card>
    )
}
