'use strict';

class HighScore {
  constructor() {
    this.highScoreList = [
      { name: 'Shalu', turn: 10 },
    ];
  }

  get() {
    return this.highScoreList;
  }

  create(req) {
    const { name, turn } = req.body;
    const existingScore = this.highScoreList.find(score => score.name.toLowerCase() === name.toLowerCase());

    if (existingScore) {
      const newScore = (existingScore.turn < turn) ? existingScore.turn : turn;
      existingScore.turn = newScore;
    } else {
      this.highScoreList = [ ...this.highScoreList, { name, turn }];
    }
  }

  reset() {
    this.highScoreList = [];
  }
};

module.exports = new HighScore();
