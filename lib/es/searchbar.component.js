var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button, InputGroup, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
import FaSearch from 'react-icons/lib/fa/search';
import FaClose from 'react-icons/lib/fa/close';

import './searchbar.component.scss';

var SearchBar = (_temp = _class = function (_React$PureComponent) {
  _inherits(SearchBar, _React$PureComponent);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.onClearClick = function () {
      var _this$props = _this.props,
          onClear = _this$props.onClear,
          defaultValue = _this$props.defaultValue;

      _this.setState({ searchKeyword: defaultValue });
      _this.onSearch(defaultValue);
      onClear();
    };

    _this.onSearch = function (keyword) {
      var _this$props2 = _this.props,
          onSearch = _this$props2.onSearch,
          allowEmptySearch = _this$props2.allowEmptySearch,
          minChars = _this$props2.minChars;

      if (keyword.length === 0 && allowEmptySearch || keyword.length >= minChars) {
        onSearch(keyword);
      }
    };

    _this.onChange = function (e) {
      var _this$props3 = _this.props,
          isDynamic = _this$props3.isDynamic,
          defaultValue = _this$props3.defaultValue;

      var searchKeyword = e.target.value || defaultValue;
      _this.setState({ searchKeyword: searchKeyword });
      if (isDynamic) {
        _this.onSearch(searchKeyword);
      }
    };

    _this.onSearchClick = function () {
      _this.onSearch(_this.state.searchKeyword);
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode && e.keyCode === 13) {
        _this.onSearch(_this.state.searchKeyword);
      }
    };

    _this.getButton = function () {
      var _this$props4 = _this.props,
          id = _this$props4.id,
          allowEmptySearch = _this$props4.allowEmptySearch,
          isDynamic = _this$props4.isDynamic,
          minChars = _this$props4.minChars;
      var searchKeyword = _this.state.searchKeyword;

      var bsClass = ['btn'];
      var icon = React.createElement(FaSearch, null);
      var onClick = _this.onSearchClick;
      var isDisabled = true;
      if (searchKeyword.length === 0 && allowEmptySearch || searchKeyword.length >= minChars) {
        isDisabled = false;
      }
      if (isDynamic) {
        bsClass.push('dynamic-search');
      }
      if (searchKeyword && isDynamic) {
        bsClass.push('btn-close');
        icon = React.createElement(FaClose, null);
        onClick = _this.onClearClick;
        isDisabled = false;
      }
      return React.createElement(
        Button,
        {
          id: id + '-button',
          bsClass: bsClass.join(' '),
          onClick: onClick,
          disabled: isDisabled
        },
        icon
      );
    };

    _this.getTooltip = function (tooltip) {
      return React.createElement(
        Tooltip,
        { id: 'tooltip' },
        tooltip
      );
    };

    _this.renderSearchBar = function () {
      var _this$props5 = _this.props,
          id = _this$props5.id,
          inputClassName = _this$props5.inputClassName,
          translations = _this$props5.translations,
          isDynamic = _this$props5.isDynamic;
      var searchKeyword = _this.state.searchKeyword;

      return React.createElement(
        InputGroup,
        null,
        React.createElement(FormControl, {
          id: id + '-input',
          type: isDynamic ? 'text' : 'search',
          className: inputClassName,
          onChange: _this.onChange,
          onKeyDown: isDynamic ? function () {} : _this.onKeyDown,
          placeholder: translations.searchPlaceHolder,
          value: searchKeyword
        }),
        React.createElement(
          InputGroup.Button,
          null,
          _this.getButton()
        )
      );
    };

    _this.renderContent = function () {
      var _this$props6 = _this.props,
          translations = _this$props6.translations,
          tooltipDelay = _this$props6.tooltipDelay,
          isDynamic = _this$props6.isDynamic,
          isTooltipEnabled = _this$props6.isTooltipEnabled,
          minChars = _this$props6.minChars;

      var tooltipText = translations.tooltip;
      if (!tooltipText) {
        if (isDynamic) {
          tooltipText = 'Search starts when you have entered ' + minChars + ' characters.';
        } else if (minChars) {
          tooltipText = 'You can search when you have entered ' + minChars + ' characters.';
        }
      }
      if (tooltipText && isTooltipEnabled) {
        return React.createElement(
          OverlayTrigger,
          {
            placement: 'bottom',
            overlay: _this.getTooltip(tooltipText),
            delay: tooltipDelay
          },
          _this.renderSearchBar()
        );
      }
      return _this.renderSearchBar();
    };

    _this.state = {
      searchKeyword: props.defaultValue
    };
    return _this;
  }

  // Search when allowed


  SearchBar.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        className = _props.className;

    return React.createElement(
      'div',
      {
        id: id + '-container',
        className: className
      },
      this.renderContent()
    );
  };

  return SearchBar;
}(React.PureComponent), _class.defaultProps = {
  id: 'oc-react-searchbar',
  className: 'oc-search-bar',
  inputClassName: '',
  defaultValue: '',
  minChars: 0,
  tooltipDelay: 0,
  allowEmptySearch: true,
  isDynamic: false,
  isTooltipEnabled: false,
  onSearch: function onSearch() {},
  onClear: function onClear() {},
  translations: {
    tooltip: '',
    searchPlaceHolder: 'Search...'
  }
}, _temp);
export { SearchBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkZhU2VhcmNoIiwiRmFDbG9zZSIsIlNlYXJjaEJhciIsInByb3BzIiwib25DbGVhckNsaWNrIiwib25DbGVhciIsImRlZmF1bHRWYWx1ZSIsInNldFN0YXRlIiwic2VhcmNoS2V5d29yZCIsIm9uU2VhcmNoIiwia2V5d29yZCIsImFsbG93RW1wdHlTZWFyY2giLCJtaW5DaGFycyIsImxlbmd0aCIsIm9uQ2hhbmdlIiwiZSIsImlzRHluYW1pYyIsInRhcmdldCIsInZhbHVlIiwib25TZWFyY2hDbGljayIsInN0YXRlIiwib25LZXlEb3duIiwia2V5Q29kZSIsImdldEJ1dHRvbiIsImlkIiwiYnNDbGFzcyIsImljb24iLCJvbkNsaWNrIiwiaXNEaXNhYmxlZCIsInB1c2giLCJqb2luIiwiZ2V0VG9vbHRpcCIsInRvb2x0aXAiLCJyZW5kZXJTZWFyY2hCYXIiLCJpbnB1dENsYXNzTmFtZSIsInRyYW5zbGF0aW9ucyIsInNlYXJjaFBsYWNlSG9sZGVyIiwicmVuZGVyQ29udGVudCIsInRvb2x0aXBEZWxheSIsImlzVG9vbHRpcEVuYWJsZWQiLCJ0b29sdGlwVGV4dCIsInJlbmRlciIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUNFQyxNQURGLEVBRUVDLFVBRkYsRUFHRUMsV0FIRixFQUlFQyxjQUpGLEVBS0VDLE9BTEYsUUFNTyxpQkFOUDtBQU9BLE9BQU9DLFFBQVAsTUFBcUIsMkJBQXJCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7O0FB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QkFBTSxDQUFFLENBVkU7QUFXcEJKLFdBQVMsbUJBQU0sQ0FBRSxDQVhHO0FBWXBCOEIsZ0JBQWM7QUFDWkgsYUFBUyxFQURHO0FBRVpJLHVCQUFtQjtBQUZQO0FBWk0sQztTQW5CSGxDLFMiLCJmaWxlIjoic2VhcmNoYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgT3ZlcmxheVRyaWdnZXIsXG4gIFRvb2x0aXAsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgRmFTZWFyY2ggZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3NlYXJjaCc7XG5pbXBvcnQgRmFDbG9zZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2xvc2UnO1xuXG5pbXBvcnQgJy4vc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0b29sdGlwRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluQ2hhcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYWxsb3dFbXB0eVNlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNEeW5hbWljOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1Rvb2x0aXBFbmFibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlYXJjaFBsYWNlSG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ29jLXJlYWN0LXNlYXJjaGJhcicsXG4gICAgY2xhc3NOYW1lOiAnb2Mtc2VhcmNoLWJhcicsXG4gICAgaW5wdXRDbGFzc05hbWU6ICcnLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgbWluQ2hhcnM6IDAsXG4gICAgdG9vbHRpcERlbGF5OiAwLFxuICAgIGFsbG93RW1wdHlTZWFyY2g6IHRydWUsXG4gICAgaXNEeW5hbWljOiBmYWxzZSxcbiAgICBpc1Rvb2x0aXBFbmFibGVkOiBmYWxzZSxcbiAgICBvblNlYXJjaDogKCkgPT4ge30sXG4gICAgb25DbGVhcjogKCkgPT4ge30sXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICB0b29sdGlwOiAnJyxcbiAgICAgIHNlYXJjaFBsYWNlSG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaEtleXdvcmQ6IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgb25DbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2xlYXIsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaEtleXdvcmQ6IGRlZmF1bHRWYWx1ZSB9KTtcbiAgICB0aGlzLm9uU2VhcmNoKGRlZmF1bHRWYWx1ZSk7XG4gICAgb25DbGVhcigpO1xuICB9XG5cbiAgLy8gU2VhcmNoIHdoZW4gYWxsb3dlZFxuICBvblNlYXJjaCA9IChrZXl3b3JkKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25TZWFyY2gsXG4gICAgICBhbGxvd0VtcHR5U2VhcmNoLFxuICAgICAgbWluQ2hhcnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKChrZXl3b3JkLmxlbmd0aCA9PT0gMCAmJiBhbGxvd0VtcHR5U2VhcmNoKSB8fCAoa2V5d29yZC5sZW5ndGggPj0gbWluQ2hhcnMpKSB7XG4gICAgICBvblNlYXJjaChrZXl3b3JkKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXNEeW5hbWljLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNlYXJjaEtleXdvcmQgPSAoZS50YXJnZXQudmFsdWUgfHwgZGVmYXVsdFZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoS2V5d29yZCB9KTtcbiAgICBpZiAoaXNEeW5hbWljKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKHNlYXJjaEtleXdvcmQpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5vblNlYXJjaCh0aGlzLnN0YXRlLnNlYXJjaEtleXdvcmQpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMub25TZWFyY2godGhpcy5zdGF0ZS5zZWFyY2hLZXl3b3JkKTtcbiAgICB9XG4gIH1cblxuICBnZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBhbGxvd0VtcHR5U2VhcmNoLFxuICAgICAgaXNEeW5hbWljLFxuICAgICAgbWluQ2hhcnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2VhcmNoS2V5d29yZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBic0NsYXNzID0gWydidG4nXTtcbiAgICBsZXQgaWNvbiA9IDxGYVNlYXJjaCAvPjtcbiAgICBsZXQgb25DbGljayA9IHRoaXMub25TZWFyY2hDbGljaztcbiAgICBsZXQgaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgaWYgKChzZWFyY2hLZXl3b3JkLmxlbmd0aCA9PT0gMCAmJiBhbGxvd0VtcHR5U2VhcmNoKSB8fCAoc2VhcmNoS2V5d29yZC5sZW5ndGggPj0gbWluQ2hhcnMpKSB7XG4gICAgICBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0R5bmFtaWMpIHtcbiAgICAgIGJzQ2xhc3MucHVzaCgnZHluYW1pYy1zZWFyY2gnKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaEtleXdvcmQgJiYgaXNEeW5hbWljKSB7XG4gICAgICBic0NsYXNzLnB1c2goJ2J0bi1jbG9zZScpO1xuICAgICAgaWNvbiA9IDxGYUNsb3NlIC8+O1xuICAgICAgb25DbGljayA9IHRoaXMub25DbGVhckNsaWNrO1xuICAgICAgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBpZD17YCR7aWR9LWJ1dHRvbmB9XG4gICAgICAgIGJzQ2xhc3M9e2JzQ2xhc3Muam9pbignICcpfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgID5cbiAgICAgICAge2ljb259XG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgZ2V0VG9vbHRpcCA9IHRvb2x0aXAgPT4gKFxuICAgIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPlxuICAgICAge3Rvb2x0aXB9XG4gICAgPC9Ub29sdGlwPlxuICApXG5cbiAgcmVuZGVyU2VhcmNoQmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICBpc0R5bmFtaWMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2VhcmNoS2V5d29yZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgIGlkPXtgJHtpZH0taW5wdXRgfVxuICAgICAgICAgIHR5cGU9e2lzRHluYW1pYyA/ICd0ZXh0JyA6ICdzZWFyY2gnfVxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc05hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgb25LZXlEb3duPXtpc0R5bmFtaWMgPyAoKSA9PiB7fSA6IHRoaXMub25LZXlEb3dufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGlvbnMuc2VhcmNoUGxhY2VIb2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3NlYXJjaEtleXdvcmR9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgICB7dGhpcy5nZXRCdXR0b24oKX1cbiAgICAgICAgPC9JbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgIDwvSW5wdXRHcm91cD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICB0b29sdGlwRGVsYXksXG4gICAgICBpc0R5bmFtaWMsXG4gICAgICBpc1Rvb2x0aXBFbmFibGVkLFxuICAgICAgbWluQ2hhcnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHRvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb25zLnRvb2x0aXA7XG4gICAgaWYgKCF0b29sdGlwVGV4dCkge1xuICAgICAgaWYgKGlzRHluYW1pYykge1xuICAgICAgICB0b29sdGlwVGV4dCA9IGBTZWFyY2ggc3RhcnRzIHdoZW4geW91IGhhdmUgZW50ZXJlZCAke21pbkNoYXJzfSBjaGFyYWN0ZXJzLmA7XG4gICAgICB9IGVsc2UgaWYgKG1pbkNoYXJzKSB7XG4gICAgICAgIHRvb2x0aXBUZXh0ID0gYFlvdSBjYW4gc2VhcmNoIHdoZW4geW91IGhhdmUgZW50ZXJlZCAke21pbkNoYXJzfSBjaGFyYWN0ZXJzLmA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0b29sdGlwVGV4dCAmJiBpc1Rvb2x0aXBFbmFibGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8T3ZlcmxheVRyaWdnZXJcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgIG92ZXJsYXk9e3RoaXMuZ2V0VG9vbHRpcCh0b29sdGlwVGV4dCl9XG4gICAgICAgICAgZGVsYXk9e3Rvb2x0aXBEZWxheX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU2VhcmNoQmFyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9e2Ake2lkfS1jb250YWluZXJgfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19