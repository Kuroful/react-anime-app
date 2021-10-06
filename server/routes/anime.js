import express from 'express';

import { getAnime, addAnimeItem } from '../controllers/anime.js';

const router = express.Router();

router.get('/', getAnime );
router.post('/', addAnimeItem);

export default router;