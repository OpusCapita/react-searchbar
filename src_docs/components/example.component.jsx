import React from 'react';
import SearchBar from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      filterValue: '',
    };
  }

  handleSearch = (searchValue) => {
    this.setState({ searchValue });
  }

  handleFilter = (filterValue) => {
    this.setState({ filterValue });
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <h1>Search bar</h1>
        <SearchBar
          value={this.state.searchValue}
          onSearch={this.handleSearch}
          searchPlaceHolder="Search..."
        />
        <h1>Search bar auto</h1>
        <SearchBar
          id="auto-searchbar"
          value={this.state.filterValue}
          onSearch={this.handleFilter}
          searchPlaceHolder="Search..."
          dynamicSearchStartsFrom={3}
        />
      </div>
    );
  }
}
