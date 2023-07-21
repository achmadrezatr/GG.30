const express = require('express');
const router = express.Router();


const { handleGetPlaylist, handleAddSong, handleGetSongById, handleGetSongsSortedByPlayCount } = require('../controller/playlistController');


router.get('/', handleGetPlaylist);

router.post('/', handleAddSong);

router.get('/sortedByPlayCount', handleGetSongsSortedByPlayCount);

router.get('/:id', handleGetSongById);

module.exports = router;