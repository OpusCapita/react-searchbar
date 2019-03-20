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
      <div>
        <h1>Search bar</h1>
        <SearchBar
          {...this.props}
          value={this.state.searchValue}
          onSearch={this.handleSearch}
        />
        <p style={{ marginTop: '20px' }}>
          Search keyword: {this.state.searchValue}
        </p>
      </div>
    );
  }
}
