const { v4 } = require('uuid');

let playlist = [
    {
        'title': 'Dull Knives',
        'artist': 'Imagine Dragons',
        'url': 'https://music.youtube.com/watch?v=WL55d9HmC7o&list=OLAK5uy_lvfCxPUsCzss1fTa0Tm3GRkMsg7x1VCtM',
        'id': '1',
        'playCount': 0
    },

    {
        'title': 'Evaluasi',
        'artist': 'Hindia',
        'url': 'https://spotify/hindia',
        'id': '2',
        'playCount': 0
    }
];

const getPlaylist = () => {
    return playlist;
}

const addSong = (songData) => {
    playlist.push({ ...songData, id: v4(), playCount: 0 });
}

const getSongById = (id) => {
    return playlist.find((song) => song.id === id);
}

const incrementPlayCount = (id) => {
    const song = getSongById(id);
    if (song) {
        song.playCount++;
    }
}

const getSongsSortedByPlayCount = () => {
    return [...playlist].sort((a, b) => b.playCount - a.playCount);
}

module.exports = { getPlaylist, addSong, getSongById, incrementPlayCount, getSongsSortedByPlayCount };