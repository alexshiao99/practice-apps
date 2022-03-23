const axios = require('axios');

let saveWord = (word) => {
  return axios.post('/api/words', word);
}

let readWords = () => {
  return axios.get('/api/words');
}

let patchWord = (word) => {
  return axios.patch('/api/words', word);
}

let deleteWord = (word) => {
  let id = word._id;
  return axios.delete(`/api/words/${id}`);
}

module.exports = {
  saveWord,
  readWords,
  patchWord,
  deleteWord
}