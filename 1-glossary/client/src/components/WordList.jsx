import React from 'react';
import WordEntry from './WordEntry.jsx';

class WordList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedWord: {}
    }
  }

  clickWord(word) {
    this.setState({
      clickedWord: word
    })
  }

  render() {
    return (
    <>
    {this.props.words.map((word, index) => {
      return <WordEntry key={index} word={word} clickWord={this.clickWord.bind(this)} clickedWord={this.state.clickedWord} reRender={this.props.reRender}/>
    })}
    </>
    )
  }
}

export default WordList;