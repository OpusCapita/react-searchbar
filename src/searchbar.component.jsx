import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  InputGroup,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import FaSearch from 'react-icons/lib/fa/search';
import FaClose from 'react-icons/lib/fa/close';

import './searchbar.component.scss';

export default class SearchBar extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    defaultValue: PropTypes.string,
    tooltipDelay: PropTypes.number,
    minChars: PropTypes.number,
    allowEmptySearch: PropTypes.bool,
    isDynamic: PropTypes.bool,
    isTooltipEnabled: PropTypes.bool,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
    translations: PropTypes.shape({
      tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      searchPlaceHolder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  };

  static defaultProps = {
    id: 'oc-react-searchbar',
    className: 'oc-search-bar',
    inputClassName: '',
    defaultValue: '',
    minChars: 0,
    tooltipDelay: 0,
    allowEmptySearch: true,
    isDynamic: false,
    isTooltipEnabled: false,
    onSearch: () => {},
    onClear: () => {},
    translations: {
      tooltip: '',
      searchPlaceHolder: 'Search...',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: props.defaultValue,
    };
  }

  onClearClick = () => {
    const {
      onClear,
      defaultValue,
    } = this.props;
    this.setState({ searchKeyword: defaultValue });
    this.onSearch(defaultValue);
    onClear();
  }

  // Search when allowed
  onSearch = (keyword) => {
    const {
      onSearch,
      allowEmptySearch,
      minChars,
    } = this.props;
    if ((keyword.length === 0 && allowEmptySearch) || (keyword.length >= minChars)) {
      onSearch(keyword);
    }
  }

  onChange = (e) => {
    const {
      isDynamic,
      defaultValue,
    } = this.props;
    const searchKeyword = (e.target.value || defaultValue);
    this.setState({ searchKeyword });
    if (isDynamic) {
      this.onSearch(searchKeyword);
    }
  }

  onSearchClick = () => {
    this.onSearch(this.state.searchKeyword);
  }

  onKeyDown = (e) => {
    if (e.keyCode && e.keyCode === 13) {
      this.onSearch(this.state.searchKeyword);
    }
  }

  getButton = () => {
    const {
      id,
      allowEmptySearch,
      isDynamic,
      minChars,
    } = this.props;
    const {
      searchKeyword,
    } = this.state;
    const bsClass = ['btn'];
    let icon = <FaSearch />;
    let onClick = this.onSearchClick;
    let isDisabled = true;
    if ((searchKeyword.length === 0 && allowEmptySearch) || (searchKeyword.length >= minChars)) {
      isDisabled = false;
    }
    if (isDynamic) {
      bsClass.push('dynamic-search');
    }
    if (searchKeyword && isDynamic) {
      bsClass.push('btn-close');
      icon = <FaClose />;
      onClick = this.onClearClick;
      isDisabled = false;
    }
    return (
      <Button
        id={`${id}-button`}
        bsClass={bsClass.join(' ')}
        onClick={onClick}
        disabled={isDisabled}
      >
        {icon}
      </Button>
    );
  }

  getTooltip = tooltip => (
    <Tooltip id="tooltip">
      {tooltip}
    </Tooltip>
  )

  renderSearchBar = () => {
    const {
      id,
      inputClassName,
      translations,
      isDynamic,
    } = this.props;
    const {
      searchKeyword,
    } = this.state;
    return (
      <InputGroup>
        <FormControl
          id={`${id}-input`}
          type={isDynamic ? 'text' : 'search'}
          className={inputClassName}
          onChange={this.onChange}
          onKeyDown={isDynamic ? () => {} : this.onKeyDown}
          placeholder={translations.searchPlaceHolder}
          value={searchKeyword}
        />
        <InputGroup.Button>
          {this.getButton()}
        </InputGroup.Button>
      </InputGroup>
    );
  }

  renderContent = () => {
    const {
      translations,
      tooltipDelay,
      isDynamic,
      isTooltipEnabled,
      minChars,
    } = this.props;
    let tooltipText = translations.tooltip;
    if (!tooltipText) {
      if (isDynamic) {
        tooltipText = `Search starts when you have entered ${minChars} characters.`;
      } else if (minChars) {
        tooltipText = `You can search when you have entered ${minChars} characters.`;
      }
    }
    if (tooltipText && isTooltipEnabled) {
      return (
        <OverlayTrigger
          placement="bottom"
          overlay={this.getTooltip(tooltipText)}
          delay={tooltipDelay}
        >
          {this.renderSearchBar()}
        </OverlayTrigger>
      );
    }
    return this.renderSearchBar();
  }

  render() {
    const {
      id,
      className,
    } = this.props;
    return (
      <div
        id={`${id}-container`}
        className={className}
      >
        {this.renderContent()}
      </div>
    );
  }
}
