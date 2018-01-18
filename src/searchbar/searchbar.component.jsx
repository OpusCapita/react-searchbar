import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import './searchbar.component.scss';

export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState(this.getState(nextProps));
    }
  }

  onSearch = () => {
    this.props.onSearch(this.state.value);
  }

  onDynamicSearch = (e) => {
    const value = (e.target.value || '').trim();
    if (this.props.dynamicSearchStartsFrom <= value.length) {
      this.props.onSearch(value);
    } else {
      this.setState(this.getState(this.props, value));
    }
  }

  onCloseClick = () => {
    this.props.onSearch('');
    this.props.onCloseClick();
  }

  onChange = (e) => {
    const value = (e.target.value || '').trim();
    this.setState(this.getState(this.props, value));
  }

  getState = (props = this.props, value = props.value) => {
    const onChange = props.dynamicSearchStartsFrom ? this.onDynamicSearch : this.onChange;
    const dynamic = props.dynamicSearchStartsFrom ? 'dynamic-search ' : '';
    const close = value && props.dynamicSearchStartsFrom ? 'btn-close ' : '';
    const bsClass = `${dynamic}${close}btn`;
    const onClick = value && props.dynamicSearchStartsFrom ? this.onCloseClick : this.onSearch;
    const disabled = !value;
    const type = props.dynamicSearchStartsFrom ? 'text' : 'search';
    return {
      onChange,
      bsClass,
      onClick,
      value,
      disabled,
      type,
    };
  }

  getIcon = () => (
    this.state.value && this.props.dynamicSearchStartsFrom ? <i className="fa fa-times" /> : <i className="fa fa-search" />
  )

  render() {
    return (
      <div className="oc-search-bar">
        <InputGroup>
          <FormControl
            type={this.state.type}
            className={this.props.inputClassName}
            onChange={this.state.onChange}
            placeholder={this.props.searchPlaceHolder}
            value={this.state.value}
          />
          <InputGroup.Button>
            <Button
              bsClass={this.state.bsClass}
              onClick={this.state.onClick}
              disabled={this.state.disabled}
            >
              {this.getIcon()}
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func,
  inputClassName: PropTypes.string,
  searchPlaceHolder: PropTypes.string,
  value: PropTypes.string,
  dynamicSearchStartsFrom: PropTypes.number,
};

SearchBar.defaultProps = {
  onCloseClick: () => {},
  inputClassName: '',
  searchPlaceHolder: 'Search...',
  value: '',
  dynamicSearchStartsFrom: 0,
};
