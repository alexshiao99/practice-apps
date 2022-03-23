import React from 'react';
import DBHelpers from './DBHelpers.js';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWord: '',
      newDef: ''
    }
    this.nameChange = this.nameChange.bind(this);
    this.submit = this.submit.bind(this);
    this.defChange = this.defChange.bind(this);
  }


  submit() {
    event.preventDefault();
    let newWord = {word: this.state.newWord, definition: this.state.newDef};
    DBHelpers.saveWord(newWord)
    .then(() => {this.setState({newWord: '', newDef: ''})})
    .then(() => {this.props.reRender()})
    .catch((err) => {console.log(err)})
  }

  nameChange(e) {
    this.setState({
      newWord: e.target.value
    })
  }
  defChange(e) {
    this.setState({
      newDef: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>New Word: </label>
        <input type='text' value={this.state.newWord} onChange={(e) => {this.nameChange(e)}}></input>
        <label>New Definition: </label>
        <input type='text' value={this.state.newDef} onChange={(e) => {this.defChange(e)}}></input>
        <button></button>
      </form>
    )
  }
}

export default Submit;