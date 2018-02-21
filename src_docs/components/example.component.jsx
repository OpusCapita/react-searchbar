import React from 'react';
import SearchBar from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleSearch = (searchValue) => {
    this.setState({ searchValue });
  }

  render() {
    return (
      <SearchBar
        onSearch={this.handleSearch}
        value={this.state.searchValue}
      />
    );
  }
}
