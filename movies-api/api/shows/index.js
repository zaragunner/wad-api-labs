
import express from 'express';
import asyncHandler from 'express-async-handler';
import { getTvShows, getTvListings } from '../tmdb-api'

const router = express.Router(); 

router.get('/tmdb/tvshows', asyncHandler( async(req, res) => {
    const shows = await getTvShows();
    res.status(200).json(shows);
  }));

  router.get('/tmdb/listings', asyncHandler( async(req, res) => {
    const listings = await getTvListings();
    res.status(200).json(listings);
  }));

  export default router;

