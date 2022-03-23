import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }

  searchValueChange(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  render() {
    return (
      <>
      <form onSubmit={() => {this.props.searchWords(this.state.searchValue)}}>
        <input type='text' value={this.state.searchValue} onChange={(e) => {this.searchValueChange(e)}}></input>
        <button>Search</button>
      </form>
      <button onClick={() => {this.props.reRender()}}>Go Back</button>
      </>
    )
  }
}


export default SearchBar;