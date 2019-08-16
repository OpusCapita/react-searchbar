'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _search = require('react-icons/lib/fa/search');

var _search2 = _interopRequireDefault(_search);

var _close = require('react-icons/lib/fa/close');

var _close2 = _interopRequireDefault(_close);

require('./searchbar.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      var icon = _react2.default.createElement(_search2.default, null);
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
        icon = _react2.default.createElement(_close2.default, null);
        onClick = _this.onClearClick;
        isDisabled = false;
      }
      return _react2.default.createElement(
        _reactBootstrap.Button,
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
      return _react2.default.createElement(
        _reactBootstrap.Tooltip,
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

      return _react2.default.createElement(
        _reactBootstrap.InputGroup,
        null,
        _react2.default.createElement(_reactBootstrap.FormControl, {
          autoFocus: autoFocus,
          id: id + '-input',
          type: isDynamic ? 'text' : 'search',
          className: inputClassName,
          onChange: _this.onChange,
          onKeyDown: isDynamic ? function () {} : _this.onKeyDown,
          placeholder: translations.searchPlaceHolder,
          value: searchKeyword
        }),
        _react2.default.createElement(
          _reactBootstrap.InputGroup.Button,
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
        return _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
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

    return _react2.default.createElement(
      'div',
      {
        id: id + '-container',
        className: className
      },
      this.renderContent()
    );
  };

  return SearchBar;
}(_react2.default.PureComponent), _class.defaultProps = {
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
exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsIm9uQ2xlYXJDbGljayIsIm9uQ2xlYXIiLCJkZWZhdWx0VmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaEtleXdvcmQiLCJvblNlYXJjaCIsImtleXdvcmQiLCJhbGxvd0VtcHR5U2VhcmNoIiwibWluQ2hhcnMiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImUiLCJpc0R5bmFtaWMiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU2VhcmNoQ2xpY2siLCJzdGF0ZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJnZXRCdXR0b24iLCJpZCIsImJzQ2xhc3MiLCJpY29uIiwib25DbGljayIsImlzRGlzYWJsZWQiLCJwdXNoIiwiam9pbiIsImdldFRvb2x0aXAiLCJ0b29sdGlwIiwicmVuZGVyU2VhcmNoQmFyIiwiYXV0b0ZvY3VzIiwiaW5wdXRDbGFzc05hbWUiLCJ0cmFuc2xhdGlvbnMiLCJzZWFyY2hQbGFjZUhvbGRlciIsInJlbmRlckNvbnRlbnQiLCJ0b29sdGlwRGVsYXkiLCJpc1Rvb2x0aXBFbmFibGVkIiwidG9vbHRpcFRleHQiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBT0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUF1Q25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBT25CQyxZQVBtQixHQU9KLFlBQU07QUFBQSx3QkFJZixNQUFLRCxLQUpVO0FBQUEsVUFFakJFLE9BRmlCLGVBRWpCQSxPQUZpQjtBQUFBLFVBR2pCQyxZQUhpQixlQUdqQkEsWUFIaUI7O0FBS25CLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxlQUFlRixZ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UmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSW5wdXRHcm91cCxcbiAgRm9ybUNvbnRyb2wsXG4gIE92ZXJsYXlUcmlnZ2VyLFxuICBUb29sdGlwLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEZhU2VhcmNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9zZWFyY2gnO1xuaW1wb3J0IEZhQ2xvc2UgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2Nsb3NlJztcblxuaW1wb3J0ICcuL3NlYXJjaGJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0b29sdGlwRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluQ2hhcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYWxsb3dFbXB0eVNlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNEeW5hbWljOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1Rvb2x0aXBFbmFibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgICAgIHNlYXJjaFBsYWNlSG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICBpZDogJ29jLXJlYWN0LXNlYXJjaGJhcicsXG4gICAgY2xhc3NOYW1lOiAnb2Mtc2VhcmNoLWJhcicsXG4gICAgaW5wdXRDbGFzc05hbWU6ICcnLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgbWluQ2hhcnM6IDAsXG4gICAgdG9vbHRpcERlbGF5OiAwLFxuICAgIGFsbG93RW1wdHlTZWFyY2g6IHRydWUsXG4gICAgaXNEeW5hbWljOiBmYWxzZSxcbiAgICBpc1Rvb2x0aXBFbmFibGVkOiBmYWxzZSxcbiAgICBvblNlYXJjaDogKCkgPT4ge30sXG4gICAgb25DbGVhcjogKCkgPT4ge30sXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICB0b29sdGlwOiAnJyxcbiAgICAgIHNlYXJjaFBsYWNlSG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hLZXl3b3JkOiBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xlYXJDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbkNsZWFyLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkOiBkZWZhdWx0VmFsdWUgfSk7XG4gICAgdGhpcy5vblNlYXJjaChkZWZhdWx0VmFsdWUpO1xuICAgIG9uQ2xlYXIoKTtcbiAgfVxuXG4gIC8vIFNlYXJjaCB3aGVuIGFsbG93ZWRcbiAgb25TZWFyY2ggPSAoa2V5d29yZCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uU2VhcmNoLFxuICAgICAgYWxsb3dFbXB0eVNlYXJjaCxcbiAgICAgIG1pbkNoYXJzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICgoa2V5d29yZC5sZW5ndGggPT09IDAgJiYgYWxsb3dFbXB0eVNlYXJjaCkgfHwgKGtleXdvcmQubGVuZ3RoID49IG1pbkNoYXJzKSkge1xuICAgICAgb25TZWFyY2goa2V5d29yZCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzRHluYW1pYyxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzZWFyY2hLZXl3b3JkID0gKGUudGFyZ2V0LnZhbHVlIHx8IGRlZmF1bHRWYWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaEtleXdvcmQgfSk7XG4gICAgaWYgKGlzRHluYW1pYykge1xuICAgICAgdGhpcy5vblNlYXJjaChzZWFyY2hLZXl3b3JkKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaENsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMub25TZWFyY2godGhpcy5zdGF0ZS5zZWFyY2hLZXl3b3JkKTtcbiAgfVxuXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoS2V5d29yZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgYWxsb3dFbXB0eVNlYXJjaCxcbiAgICAgIGlzRHluYW1pYyxcbiAgICAgIG1pbkNoYXJzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNlYXJjaEtleXdvcmQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYnNDbGFzcyA9IFsnYnRuJ107XG4gICAgbGV0IGljb24gPSA8RmFTZWFyY2ggLz47XG4gICAgbGV0IG9uQ2xpY2sgPSB0aGlzLm9uU2VhcmNoQ2xpY2s7XG4gICAgbGV0IGlzRGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmICgoc2VhcmNoS2V5d29yZC5sZW5ndGggPT09IDAgJiYgYWxsb3dFbXB0eVNlYXJjaCkgfHwgKHNlYXJjaEtleXdvcmQubGVuZ3RoID49IG1pbkNoYXJzKSkge1xuICAgICAgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNEeW5hbWljKSB7XG4gICAgICBic0NsYXNzLnB1c2goJ2R5bmFtaWMtc2VhcmNoJyk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hLZXl3b3JkICYmIGlzRHluYW1pYykge1xuICAgICAgYnNDbGFzcy5wdXNoKCdidG4tY2xvc2UnKTtcbiAgICAgIGljb24gPSA8RmFDbG9zZSAvPjtcbiAgICAgIG9uQ2xpY2sgPSB0aGlzLm9uQ2xlYXJDbGljaztcbiAgICAgIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9e2Ake2lkfS1idXR0b25gfVxuICAgICAgICBic0NsYXNzPXtic0NsYXNzLmpvaW4oJyAnKX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHtpY29ufVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGdldFRvb2x0aXAgPSB0b29sdGlwID0+IChcbiAgICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIj5cbiAgICAgIHt0b29sdGlwfVxuICAgIDwvVG9vbHRpcD5cbiAgKVxuXG4gIHJlbmRlclNlYXJjaEJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBpZCxcbiAgICAgIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgaXNEeW5hbWljLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNlYXJjaEtleXdvcmQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9Gb2N1c31cbiAgICAgICAgICBpZD17YCR7aWR9LWlucHV0YH1cbiAgICAgICAgICB0eXBlPXtpc0R5bmFtaWMgPyAndGV4dCcgOiAnc2VhcmNoJ31cbiAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aXNEeW5hbWljID8gKCkgPT4ge30gOiB0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRpb25zLnNlYXJjaFBsYWNlSG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hLZXl3b3JkfVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgICAge3RoaXMuZ2V0QnV0dG9uKCl9XG4gICAgICAgIDwvSW5wdXRHcm91cC5CdXR0b24+XG4gICAgICA8L0lucHV0R3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgdG9vbHRpcERlbGF5LFxuICAgICAgaXNEeW5hbWljLFxuICAgICAgaXNUb29sdGlwRW5hYmxlZCxcbiAgICAgIG1pbkNoYXJzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB0b29sdGlwVGV4dCA9IHRyYW5zbGF0aW9ucy50b29sdGlwO1xuICAgIGlmICghdG9vbHRpcFRleHQpIHtcbiAgICAgIGlmIChpc0R5bmFtaWMpIHtcbiAgICAgICAgdG9vbHRpcFRleHQgPSBgU2VhcmNoIHN0YXJ0cyB3aGVuIHlvdSBoYXZlIGVudGVyZWQgJHttaW5DaGFyc30gY2hhcmFjdGVycy5gO1xuICAgICAgfSBlbHNlIGlmIChtaW5DaGFycykge1xuICAgICAgICB0b29sdGlwVGV4dCA9IGBZb3UgY2FuIHNlYXJjaCB3aGVuIHlvdSBoYXZlIGVudGVyZWQgJHttaW5DaGFyc30gY2hhcmFjdGVycy5gO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodG9vbHRpcFRleHQgJiYgaXNUb29sdGlwRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICBvdmVybGF5PXt0aGlzLmdldFRvb2x0aXAodG9vbHRpcFRleHQpfVxuICAgICAgICAgIGRlbGF5PXt0b29sdGlwRGVsYXl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWFyY2hCYXIoKX1cbiAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlclNlYXJjaEJhcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXtgJHtpZH0tY29udGFpbmVyYH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==