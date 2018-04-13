import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  InputGroup,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import './searchbar.component.scss';

export default class SearchBar extends React.PureComponent {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onCloseClick: PropTypes.func,
    inputClassName: PropTypes.string,
    searchPlaceHolder: PropTypes.string,
    value: PropTypes.string,
    dynamicSearchStartsFrom: PropTypes.number,
    tooltip: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    tooltipDelay: PropTypes.number,
  }

  static defaultProps = {
    onCloseClick: () => {},
    inputClassName: '',
    searchPlaceHolder: 'Search...',
    value: '',
    dynamicSearchStartsFrom: 0,
    tooltip: '',
    tooltipDelay: 0,
  }

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
    const value = (e.target.value || '');
    if (this.props.dynamicSearchStartsFrom <= value.length || !value) {
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
    const value = (e.target.value || '');
    this.setState(this.getState(this.props, value));
  }

  onKeyDown = (e) => {
    if (e.keyCode && e.keyCode === 13) {
      this.onSearch();
    }
  }

  getState = (props = this.props, value = props.value) => {
    const onChange = props.dynamicSearchStartsFrom ? this.onDynamicSearch : this.onChange;
    const dynamic = props.dynamicSearchStartsFrom ? 'dynamic-search ' : '';
    const close = value && props.dynamicSearchStartsFrom ? 'btn-close ' : '';
    const bsClass = `${dynamic}${close}btn`;
    const onClick = value && props.dynamicSearchStartsFrom ? this.onCloseClick : this.onSearch;
    const onKeyDown = !props.dynamicSearchStartsFrom ? this.onKeyDown : () => {};
    const disabled = !value;
    const type = props.dynamicSearchStartsFrom ? 'text' : 'search';
    return {
      onChange,
      onKeyDown,
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

  getTooltip = tooltip => (
    <Tooltip id="tooltip">
      {tooltip}
    </Tooltip>
  )

  renderSearchBar = () => (
    <InputGroup>
      <FormControl
        type={this.state.type}
        className={this.props.inputClassName}
        onChange={this.state.onChange}
        onKeyDown={this.state.onKeyDown}
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
  )

  renderContent = () => {
    const tooltip = this.props.dynamicSearchStartsFrom && !this.props.tooltip ?
      'Search starts when you have entered enough characters.' :
      this.props.tooltip;
    return (
      tooltip ?
        <OverlayTrigger placement="bottom" overlay={this.getTooltip(tooltip)} delay={this.props.tooltipDelay}>
          {this.renderSearchBar()}
        </OverlayTrigger> :
        this.renderSearchBar()
    );
  }

  render() {
    return (
      <div className="oc-search-bar">
        {this.renderContent()}
      </div>
    );
  }
}
