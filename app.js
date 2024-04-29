const express = require('express');
const bodyParser = require('body-parser');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');
const cors = require('./middlewares/cors')
const path = require('path');
const app = express();
const PORT = 3000;
app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
); 

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

