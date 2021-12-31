
import express from 'express';
import asyncHandler from 'express-async-handler';
import { getTvShows } from '../tmdb-api'

const router = express.Router(); 

router.get('/tmdb/tvshows', asyncHandler( async(req, res) => {
    const shows = await getTvShows();
    res.status(200).json(shows);
  }));

  export default router;
  
