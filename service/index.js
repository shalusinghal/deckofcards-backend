const axios = require('axios');

const DECK_BASE_URL = 'https://deckofcardsapi.com/api/deck';

module.exports.shuffleCards = () => {
  return axios.get(`${DECK_BASE_URL}/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC`);
};

module.exports.drawCard = (deckId) => {
  return axios.get(`${DECK_BASE_URL}/${deckId}/draw/?count=1`);
}
