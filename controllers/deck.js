'use strict';
const { shuffleCards, drawCard } = require('./../service');

class Deck {
  async shuffle() {
    try {
      const response = await shuffleCards();
      return { status: 200, data: response.data };
    } catch (e) {
      return this.erorHandler(e);
    }
  }

  async draw(req) {
    const { deckId } = req.params;
    try {
      const response = await drawCard(deckId);
      return { status: 200, data: response.data };
    } catch (e) {
      return this.erorHandler(e);
    }
  }

  erorHandler(err) {
    return { status: 500, data: { message: 'There is some error. Please try again!' , error: err.message} };
  }
};

module.exports = new Deck();
