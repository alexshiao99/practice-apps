import React from 'react';

var WordEntry = (props) => {
  return (
    <>
    <div>{props.word.word}</div>
    <div>{props.word.definition}</div>
    </>
  )
}

export default WordEntry;