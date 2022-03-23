import React from 'react';
import Submit from './Submit.jsx';
import DBHelpers from './DBHelpers.js';
import WordList from './WordList.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: []
    }
  }
  componentDidMount() {
    this.renderDataAfterAPI();
  }

  renderDataAfterAPI() {
    DBHelpers.readWords()
    .then((data) => {
      this.setState({
        words: data.data
      })
    })
  }

  searchWords(query) {
    event.preventDefault();
    DBHelpers.readWords(query)
    .then((data) => {
      this.setState({
        words: data.data
      })
    })
  }

  render() {
    return (
      <>
      <Submit reRender={this.renderDataAfterAPI.bind(this)}/>
      <SearchBar reRender={this.renderDataAfterAPI.bind(this)} searchWords={this.searchWords.bind(this)}/>
      <WordList words={this.state.words} reRender={this.renderDataAfterAPI.bind(this)}/>
      </>
    )
  }
}

export default App;