import React from 'react';
import DBHelpers from './DBHelpers.js';

class WordEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  editWord() {
    let newWord = prompt('Please edit the spelling of the word') || this.props.word.word;
    let newDef = prompt('Please edit the definition of the word') || this.props.word.definition;
    let word = {_id: this.props.word._id, word: newWord, definition: newDef};
    DBHelpers.patchWord(word)
    .then(() => {this.props.reRender()})
    .catch((err) => {console.log(err)})
  }

  deleteWord(word) {
    DBHelpers.deleteWord(word)
    .then(() => {this.props.reRender()})
    .catch((err) => {console.log(err)})
  }

  render() {
    if (this.props.word._id === this.props.clickedWord._id) {
      return (
        <>
        <ul onClick={() => {this.props.clickWord(this.props.word)}}>{this.props.word.word}
        <li>{this.props.word.definition}</li>
        </ul>
        <button onClick={() => {this.deleteWord(this.props.word)}}>Delete</button>
        <button onClick={() => {this.editWord()}}>Edit</button>
        </>
      )
    }
    return (
      <div onClick={() => {this.props.clickWord(this.props.word)}}>{this.props.word.word}</div>
    )
  }
}

export default WordEntry;