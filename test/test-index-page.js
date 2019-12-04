const expect  = require('chai').expect;
const axios = require('axios');

it('Set New High Score', function(done) {
  axios.post('http://localhost:8000/highscore', { name: 'User1', turn: 12 })
    .then((response) => {
      expect(response.data.message).to.equal('High score updated successfully');
      done();
    })
    .catch((error) => {
      console.log('error', error);
    });
});

it('Get High Score List', function(done) {
  axios.get('http://localhost:8000/highscore')
    .then((response) => {
      expect(response.data).to.be.an('array');
      done();
    })
    .catch((error) => {
      console.log('error', error);
    });
});

it('Reset New High Score', function(done) {
  axios.post('http://localhost:8000/highscore/reset')
    .then((response) => {
      expect(response.data.message).to.equal('High score reset successfully');
      done();
    })
    .catch((error) => {
      console.log('error', error);
    });
});

it('Shuffle the Deck', function(done) {
  axios.get('http://localhost:8000/deck/shuffle')
    .then((response) => {
      expect(response.data.success).to.equal(true);
      done();
    })
    .catch((error) => {
      console.log('error', error);
    });
});
