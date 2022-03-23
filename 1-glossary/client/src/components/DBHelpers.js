const axios = require('axios');

let saveWord = (word) => {
  return axios.post('/api/words', word);
}

let readWords = () => {
  return axios.get('api/words');
}

let patchWord = (word) => {

}

let deleteWord = (word) => {

}

module.exports = {
  saveWord,
  readWords,
  patchWord,
  deleteWord
}