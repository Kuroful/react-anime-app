import express from 'express';
import mongoose from 'mongoose';

import AnimeListItem from '../models/animeListItem.js';

const router = express.Router();
export const getAnime = async (req, res) => { 
    try {
        const animeListItem = await AnimeListItem.find();
                
        res.status(200).json(animeListItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addAnimeItem = async (req, res) => {
    const { title, image_url, mal_id, url, start_date } = req.body;

    const newAnimeListItem = new AnimeListItem({ title, image_url, mal_id, url, start_date })

    try {
        await newAnimeListItem.save();

        res.status(201).json(newAnimeListItem );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteAnimeItem = async (req, res) => {
    
}

export default router;