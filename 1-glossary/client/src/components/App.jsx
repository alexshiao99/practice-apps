import React from 'react';
import Submit from './Submit.jsx';
import DBHelpers from './DBHelpers.js';
import WordList from './WordList.jsx';

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

  render() {
    return (
      <>
      <Submit reRender={this.renderDataAfterAPI.bind(this)}/>
      <WordList words={this.state.words}/>
      </>
    )
  }
}

export default App;