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
          autoFocus = _this$props5.autoFocus,
          id = _this$props5.id,
          inputClassName = _this$props5.inputClassName,
          translations = _this$props5.translations,
          isDynamic = _this$props5.isDynamic;
      var searchKeyword = _this.state.searchKeyword;

      return React.createElement(
        InputGroup,
        null,
        React.createElement(FormControl, {
          autoFocus: autoFocus,
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
  autoFocus: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkZhU2VhcmNoIiwiRmFDbG9zZSIsIlNlYXJjaEJhciIsInByb3BzIiwib25DbGVhckNsaWNrIiwib25DbGVhciIsImRlZmF1bHRWYWx1ZSIsInNldFN0YXRlIiwic2VhcmNoS2V5d29yZCIsIm9uU2VhcmNoIiwia2V5d29yZCIsImFsbG93RW1wdHlTZWFyY2giLCJtaW5DaGFycyIsImxlbmd0aCIsIm9uQ2hhbmdlIiwiZSIsImlzRHluYW1pYyIsInRhcmdldCIsInZhbHVlIiwib25TZWFyY2hDbGljayIsInN0YXRlIiwib25LZXlEb3duIiwia2V5Q29kZSIsImdldEJ1dHRvbiIsImlkIiwiYnNDbGFzcyIsImljb24iLCJvbkNsaWNrIiwiaXNEaXNhYmxlZCIsInB1c2giLCJqb2luIiwiZ2V0VG9vbHRpcCIsInRvb2x0aXAiLCJyZW5kZXJTZWFyY2hCYXIiLCJhdXRvRm9jdXMiLCJpbnB1dENsYXNzTmFtZSIsInRyYW5zbGF0aW9ucyIsInNlYXJjaFBsYWNlSG9sZGVyIiwicmVuZGVyQ29udGVudCIsInRvb2x0aXBEZWxheSIsImlzVG9vbHRpcEVuYWJsZWQiLCJ0b29sdGlwVGV4dCIsInJlbmRlciIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUNFQyxNQURGLEVBRUVDLFVBRkYsRUFHRUMsV0FIRixFQUlFQyxjQUpGLEVBS0VDLE9BTEYsUUFNTyxpQkFOUDtBQU9BLE9BQU9DLFFBQVAsTUFBcUIsMkJBQXJCO0FBQ0EsT0FBT0MsT0FBUCxNQUFv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LENBUE07QUFRcEI1QixvQkFBa0IsSUFSRTtBQVNwQkssYUFBVyxLQVRTO0FBVXBCd0Isb0JBQWtCLEtBVkU7QUFXcEIvQixZQUFVLG9CQUFNLENBQUUsQ0FYRTtBQVlwQkosV0FBUyxtQkFBTSxDQUFFLENBWkc7QUFhcEIrQixnQkFBYztBQUNaSixhQUFTLEVBREc7QUFFWkssdUJBQW1CO0FBRlA7QUFiTSxDO1NBcEJIbkMsUyIsImZpbGUiOiJzZWFyY2hiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBGYVNlYXJjaCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc2VhcmNoJztcbmltcG9ydCBGYUNsb3NlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jbG9zZSc7XG5cbmltcG9ydCAnLi9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG9vbHRpcERlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pbkNoYXJzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGFsbG93RW1wdHlTZWFyY2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzRHluYW1pYzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNUb29sdGlwRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gICAgICBzZWFyY2hQbGFjZUhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgaWQ6ICdvYy1yZWFjdC1zZWFyY2hiYXInLFxuICAgIGNsYXNzTmFtZTogJ29jLXNlYXJjaC1iYXInLFxuICAgIGlucHV0Q2xhc3NOYW1lOiAnJyxcbiAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIG1pbkNoYXJzOiAwLFxuICAgIHRvb2x0aXBEZWxheTogMCxcbiAgICBhbGxvd0VtcHR5U2VhcmNoOiB0cnVlLFxuICAgIGlzRHluYW1pYzogZmFsc2UsXG4gICAgaXNUb29sdGlwRW5hYmxlZDogZmFsc2UsXG4gICAgb25TZWFyY2g6ICgpID0+IHt9LFxuICAgIG9uQ2xlYXI6ICgpID0+IHt9LFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgdG9vbHRpcDogJycsXG4gICAgICBzZWFyY2hQbGFjZUhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoS2V5d29yZDogcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgIH07XG4gIH1cblxuICBvbkNsZWFyQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25DbGVhcixcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoS2V5d29yZDogZGVmYXVsdFZhbHVlIH0pO1xuICAgIHRoaXMub25TZWFyY2goZGVmYXVsdFZhbHVlKTtcbiAgICBvbkNsZWFyKCk7XG4gIH1cblxuICAvLyBTZWFyY2ggd2hlbiBhbGxvd2VkXG4gIG9uU2VhcmNoID0gKGtleXdvcmQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvblNlYXJjaCxcbiAgICAgIGFsbG93RW1wdHlTZWFyY2gsXG4gICAgICBtaW5DaGFycyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoKGtleXdvcmQubGVuZ3RoID09PSAwICYmIGFsbG93RW1wdHlTZWFyY2gpIHx8IChrZXl3b3JkLmxlbmd0aCA+PSBtaW5DaGFycykpIHtcbiAgICAgIG9uU2VhcmNoKGtleXdvcmQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpc0R5bmFtaWMsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VhcmNoS2V5d29yZCA9IChlLnRhcmdldC52YWx1ZSB8fCBkZWZhdWx0VmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICAgIGlmIChpc0R5bmFtaWMpIHtcbiAgICAgIHRoaXMub25TZWFyY2goc2VhcmNoS2V5d29yZCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2hDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLm9uU2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoS2V5d29yZCk7XG4gIH1cblxuICBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5vblNlYXJjaCh0aGlzLnN0YXRlLnNlYXJjaEtleXdvcmQpO1xuICAgIH1cbiAgfVxuXG4gIGdldEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGFsbG93RW1wdHlTZWFyY2gsXG4gICAgICBpc0R5bmFtaWMsXG4gICAgICBtaW5DaGFycyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGJzQ2xhc3MgPSBbJ2J0biddO1xuICAgIGxldCBpY29uID0gPEZhU2VhcmNoIC8+O1xuICAgIGxldCBvbkNsaWNrID0gdGhpcy5vblNlYXJjaENsaWNrO1xuICAgIGxldCBpc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICBpZiAoKHNlYXJjaEtleXdvcmQubGVuZ3RoID09PSAwICYmIGFsbG93RW1wdHlTZWFyY2gpIHx8IChzZWFyY2hLZXl3b3JkLmxlbmd0aCA+PSBtaW5DaGFycykpIHtcbiAgICAgIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzRHluYW1pYykge1xuICAgICAgYnNDbGFzcy5wdXNoKCdkeW5hbWljLXNlYXJjaCcpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoS2V5d29yZCAmJiBpc0R5bmFtaWMpIHtcbiAgICAgIGJzQ2xhc3MucHVzaCgnYnRuLWNsb3NlJyk7XG4gICAgICBpY29uID0gPEZhQ2xvc2UgLz47XG4gICAgICBvbkNsaWNrID0gdGhpcy5vbkNsZWFyQ2xpY2s7XG4gICAgICBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPXtgJHtpZH0tYnV0dG9uYH1cbiAgICAgICAgYnNDbGFzcz17YnNDbGFzcy5qb2luKCcgJyl9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aWNvbn1cbiAgICAgIDwvQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBnZXRUb29sdGlwID0gdG9vbHRpcCA9PiAoXG4gICAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+XG4gICAgICB7dG9vbHRpcH1cbiAgICA8L1Rvb2x0aXA+XG4gIClcblxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgaWQsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIGlzRHluYW1pYyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XG4gICAgICAgICAgaWQ9e2Ake2lkfS1pbnB1dGB9XG4gICAgICAgICAgdHlwZT17aXNEeW5hbWljID8gJ3RleHQnIDogJ3NlYXJjaCd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzTmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBvbktleURvd249e2lzRHluYW1pYyA/ICgpID0+IHt9IDogdGhpcy5vbktleURvd259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy5zZWFyY2hQbGFjZUhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17c2VhcmNoS2V5d29yZH1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgIHt0aGlzLmdldEJ1dHRvbigpfVxuICAgICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIHRvb2x0aXBEZWxheSxcbiAgICAgIGlzRHluYW1pYyxcbiAgICAgIGlzVG9vbHRpcEVuYWJsZWQsXG4gICAgICBtaW5DaGFycyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdG9vbHRpcFRleHQgPSB0cmFuc2xhdGlvbnMudG9vbHRpcDtcbiAgICBpZiAoIXRvb2x0aXBUZXh0KSB7XG4gICAgICBpZiAoaXNEeW5hbWljKSB7XG4gICAgICAgIHRvb2x0aXBUZXh0ID0gYFNlYXJjaCBzdGFydHMgd2hlbiB5b3UgaGF2ZSBlbnRlcmVkICR7bWluQ2hhcnN9IGNoYXJhY3RlcnMuYDtcbiAgICAgIH0gZWxzZSBpZiAobWluQ2hhcnMpIHtcbiAgICAgICAgdG9vbHRpcFRleHQgPSBgWW91IGNhbiBzZWFyY2ggd2hlbiB5b3UgaGF2ZSBlbnRlcmVkICR7bWluQ2hhcnN9IGNoYXJhY3RlcnMuYDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRvb2x0aXBUZXh0ICYmIGlzVG9vbHRpcEVuYWJsZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgb3ZlcmxheT17dGhpcy5nZXRUb29sdGlwKHRvb2x0aXBUZXh0KX1cbiAgICAgICAgICBkZWxheT17dG9vbHRpcERlbGF5fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2VhcmNoQmFyKCl9XG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJTZWFyY2hCYXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBpZD17YCR7aWR9LWNvbnRhaW5lcmB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=