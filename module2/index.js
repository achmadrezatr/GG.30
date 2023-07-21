const express = require('express');
const bodyParser = require('body-parser');

//routes
const playlistRoutes = require('./routes/playlist');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/playlist', playlistRoutes);

app.listen(port, () => {
    console.log(`Server sedang berjalan pada port ${port}`);
})
