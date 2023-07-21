const { v4 } = require('uuid');
const { getPlaylist, addSong, getSongById, incrementPlayCount, getSongsSortedByPlayCount } = require('../models/playlistModel');

const handleGetPlaylist = (req, res) => {
    res.json(getPlaylist());
};

const handleAddSong = (req, res) => {
    const songData = req.body;
    addSong(songData);
    res.send(`Song ${songData.title} has been added successfully`);
}

const handleGetSongById = (req, res) => {
    const { id } = req.params;
    const song = getSongById(id);

    if (song !== undefined) {
        console.log(song);
        res.send(`Play Song  ${song.title}`)
        incrementPlayCount(id);
    } else {
        res.send(`Song with ID ${id} not found`);
    }
}

const handleGetSongsSortedByPlayCount = (req, res) => {
    res.json(getSongsSortedByPlayCount());
}

module.exports = { handleGetPlaylist, handleAddSong, handleGetSongById, handleGetSongsSortedByPlayCount };
