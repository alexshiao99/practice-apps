import React from 'react';
import WordEntry from './WordEntry.jsx';

class WordList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <>
    {this.props.words.map((word, index) => {
      return <WordEntry key={index} word={word} />
    })}
    </>
    )
  }
}

export default WordList;