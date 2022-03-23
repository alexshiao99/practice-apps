const db = require('./db');

let saveWord = (req, res) => {
  db.saveWord(req.body)
  .then((results) => res.status(201).send(results))
  .catch((error) => res.send(error))

}

let deleteWord = (req, res) => {
  db.deleteWord(req.params._id)
  .then((results) => res.send(results))
  .catch((error) => res.send(error))
}

let patchWord = (req, res) => {
  db.patchWord(req.body)
  .then((results) => res.send(results))
  .catch((error) => res.send(error))
}

let readWords = (req, res) => {
  db.readWords({})
  .then((results) => res.send(results))
  .catch((error) => res.send(error))
}

module.exports = {
  saveWord,
  deleteWord,
  patchWord,
  readWords
}