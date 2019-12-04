const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');

// Controllrs
const highScore = require('./controllers/highScore');
const deck = require('./controllers/deck');

// Create Server
const app = express();
const server = http.createServer(app);

server.listen(8000, function () {
  console.log('Server is listening on port: 8000');
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use(cors()); // to enable CORS

// Routes

// HighScore
app.post('/highscore/reset', (req, res) => {
  highScore.reset();
  res.status(200).json({ message: 'High score reset successfully' });
});

app.get('/highscore', (req, res) => {
  const list = highScore.get();
  res.status(200).json(list);
});

app.post('/highscore', (req, res) => {
  highScore.create(req);
  res.status(200).json({ message: 'High score updated successfully' });
});

// Decks
app.get('/deck/shuffle', async (req, res) => {
  const { status = 200, data } = await deck.shuffle();
  res.status(status).json(data);
});

app.get('/deck/:deckId/card/draw', async (req, res) => {
  const { status = 200, data } = await deck.draw(req);
  res.status(status).json(data);
});