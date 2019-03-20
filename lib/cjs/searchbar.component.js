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
          id = _this$props5.id,
          inputClassName = _this$props5.inputClassName,
          translations = _this$props5.translations,
          isDynamic = _this$props5.isDynamic;
      var searchKeyword = _this.state.searchKeyword;

      return _react2.default.createElement(
        _reactBootstrap.InputGroup,
        null,
        _react2.default.createElement(_reactBootstrap.FormControl, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsIm9uQ2xlYXJDbGljayIsIm9uQ2xlYXIiLCJkZWZhdWx0VmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaEtleXdvcmQiLCJvblNlYXJjaCIsImtleXdvcmQiLCJhbGxvd0VtcHR5U2VhcmNoIiwibWluQ2hhcnMiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImUiLCJpc0R5bmFtaWMiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU2VhcmNoQ2xpY2siLCJzdGF0ZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJnZXRCdXR0b24iLCJpZCIsImJzQ2xhc3MiLCJpY29uIiwib25DbGljayIsImlzRGlzYWJsZWQiLCJwdXNoIiwiam9pbiIsImdldFRvb2x0aXAiLCJ0b29sdGlwIiwicmVuZGVyU2VhcmNoQmFyIiwiaW5wdXRDbGFzc05hbWUiLCJ0cmFuc2xhdGlvbnMiLCJzZWFyY2hQbGFjZUhvbGRlciIsInJlbmRlckNvbnRlbnQiLCJ0b29sdGlwRGVsYXkiLCJpc1Rvb2x0aXBFbmFibGVkIiwidG9vbHRpcFRleHQiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBT0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFxQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBT25CQyxZQVBtQixHQU9KLFlBQU07QUFBQSx3QkFJZixNQUFLRCxLQUpVO0FBQUEsVUFFakJFLE9BRmlCLGVBRWpCQSxPQUZpQjtBQUFBLFVBR2pCQyxZQUhpQixlQUdqQkEsWUFIaUI7O0FBS25CLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxlQUFlRixZQUFqQixFQUFkO0FB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RUFBcUM7QUFDbkMsZUFDRTtBQUFDLHdDQUFEO0FBQUE7QUFDRSx1QkFBVSxRQURaO0FBRUUscUJBQVMsTUFBS1IsVUFBTCxDQUFnQlMsV0FBaEIsQ0FGWDtBQUdFLG1CQUFPRjtBQUhUO0FBS0csZ0JBQUtMLGVBQUw7QUFMSCxTQURGO0FBU0Q7QUFDRCxhQUFPLE1BQUtBLGVBQUwsRUFBUDtBQUNELEtBdkprQjs7QUFFakIsVUFBS2IsS0FBTCxHQUFhO0FBQ1haLHFCQUFlTCxNQUFNRztBQURWLEtBQWI7QUFGaUI7QUFLbEI7O0FBWUQ7OztzQkF3SUFtQyxNLHFCQUFTO0FBQUEsaUJBSUgsS0FBS3RDLEtBSkY7QUFBQSxRQUVMcUIsRUFGSyxVQUVMQSxFQUZLO0FBQUEsUUFHTGtCLFNBSEssVUFHTEEsU0FISzs7QUFLUCxXQUNFO0FBQUE7QUFBQTtBQUNFLFlBQU9sQixFQUFQLGVBREY7QUFFRSxtQkFBV2tCO0FBRmI7QUFJRyxXQUFLTCxhQUFMO0FBSkgsS0FERjtBQVFELEc7OztFQTNNb0NNLGdCQUFNQyxhLFVBbUJwQ0MsWSxHQUFlO0FBQ3BCckIsTUFBSSxvQkFEZ0I7QUFFcEJrQixhQUFXLGVBRlM7QUFHcEJSLGtCQUFnQixFQUhJO0FBSXBCNUIsZ0JBQWMsRUFKTTtBQUtwQk0sWUFBVSxDQUxVO0FBTXBCMEIsZ0JBQWMsQ0FOTTtBQU9wQjNCLG9CQUFrQixJQVBFO0FBUXBCSyxhQUFXLEtBUlM7QUFTcEJ1QixvQkFBa0IsS0FURTtBQVVwQjlCLFlBQVUsb0JBQU0sQ0FBRSxDQVZFO0FBV3BCSixXQUFTLG1CQUFNLENBQUUsQ0FYRztBQVlwQjhCLGdCQUFjO0FBQ1pILGFBQVMsRUFERztBQUVaSSx1QkFBbUI7QUFGUDtBQVpNLEM7a0JBbkJIbEMsUyIsImZpbGUiOiJzZWFyY2hiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBGYVNlYXJjaCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc2VhcmNoJztcbmltcG9ydCBGYUNsb3NlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jbG9zZSc7XG5cbmltcG9ydCAnLi9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvb2x0aXBEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5DaGFyczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBhbGxvd0VtcHR5U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0R5bmFtaWM6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzVG9vbHRpcEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0b29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VhcmNoUGxhY2VIb2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnb2MtcmVhY3Qtc2VhcmNoYmFyJyxcbiAgICBjbGFzc05hbWU6ICdvYy1zZWFyY2gtYmFyJyxcbiAgICBpbnB1dENsYXNzTmFtZTogJycsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICBtaW5DaGFyczogMCxcbiAgICB0b29sdGlwRGVsYXk6IDAsXG4gICAgYWxsb3dFbXB0eVNlYXJjaDogdHJ1ZSxcbiAgICBpc0R5bmFtaWM6IGZhbHNlLFxuICAgIGlzVG9vbHRpcEVuYWJsZWQ6IGZhbHNlLFxuICAgIG9uU2VhcmNoOiAoKSA9PiB7fSxcbiAgICBvbkNsZWFyOiAoKSA9PiB7fSxcbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgc2VhcmNoUGxhY2VIb2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIH0sXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoS2V5d29yZDogcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgIH07XG4gIH1cblxuICBvbkNsZWFyQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25DbGVhcixcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoS2V5d29yZDogZGVmYXVsdFZhbHVlIH0pO1xuICAgIHRoaXMub25TZWFyY2goZGVmYXVsdFZhbHVlKTtcbiAgICBvbkNsZWFyKCk7XG4gIH1cblxuICAvLyBTZWFyY2ggd2hlbiBhbGxvd2VkXG4gIG9uU2VhcmNoID0gKGtleXdvcmQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvblNlYXJjaCxcbiAgICAgIGFsbG93RW1wdHlTZWFyY2gsXG4gICAgICBtaW5DaGFycyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoKGtleXdvcmQubGVuZ3RoID09PSAwICYmIGFsbG93RW1wdHlTZWFyY2gpIHx8IChrZXl3b3JkLmxlbmd0aCA+PSBtaW5DaGFycykpIHtcbiAgICAgIG9uU2VhcmNoKGtleXdvcmQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpc0R5bmFtaWMsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VhcmNoS2V5d29yZCA9IChlLnRhcmdldC52YWx1ZSB8fCBkZWZhdWx0VmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICAgIGlmIChpc0R5bmFtaWMpIHtcbiAgICAgIHRoaXMub25TZWFyY2goc2VhcmNoS2V5d29yZCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2hDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLm9uU2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoS2V5d29yZCk7XG4gIH1cblxuICBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5vblNlYXJjaCh0aGlzLnN0YXRlLnNlYXJjaEtleXdvcmQpO1xuICAgIH1cbiAgfVxuXG4gIGdldEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGFsbG93RW1wdHlTZWFyY2gsXG4gICAgICBpc0R5bmFtaWMsXG4gICAgICBtaW5DaGFycyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGJzQ2xhc3MgPSBbJ2J0biddO1xuICAgIGxldCBpY29uID0gPEZhU2VhcmNoIC8+O1xuICAgIGxldCBvbkNsaWNrID0gdGhpcy5vblNlYXJjaENsaWNrO1xuICAgIGxldCBpc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICBpZiAoKHNlYXJjaEtleXdvcmQubGVuZ3RoID09PSAwICYmIGFsbG93RW1wdHlTZWFyY2gpIHx8IChzZWFyY2hLZXl3b3JkLmxlbmd0aCA+PSBtaW5DaGFycykpIHtcbiAgICAgIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzRHluYW1pYykge1xuICAgICAgYnNDbGFzcy5wdXNoKCdkeW5hbWljLXNlYXJjaCcpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoS2V5d29yZCAmJiBpc0R5bmFtaWMpIHtcbiAgICAgIGJzQ2xhc3MucHVzaCgnYnRuLWNsb3NlJyk7XG4gICAgICBpY29uID0gPEZhQ2xvc2UgLz47XG4gICAgICBvbkNsaWNrID0gdGhpcy5vbkNsZWFyQ2xpY2s7XG4gICAgICBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPXtgJHtpZH0tYnV0dG9uYH1cbiAgICAgICAgYnNDbGFzcz17YnNDbGFzcy5qb2luKCcgJyl9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aWNvbn1cbiAgICAgIDwvQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBnZXRUb29sdGlwID0gdG9vbHRpcCA9PiAoXG4gICAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+XG4gICAgICB7dG9vbHRpcH1cbiAgICA8L1Rvb2x0aXA+XG4gIClcblxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIGlzRHluYW1pYyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgaWQ9e2Ake2lkfS1pbnB1dGB9XG4gICAgICAgICAgdHlwZT17aXNEeW5hbWljID8gJ3RleHQnIDogJ3NlYXJjaCd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzTmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBvbktleURvd249e2lzRHluYW1pYyA/ICgpID0+IHt9IDogdGhpcy5vbktleURvd259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy5zZWFyY2hQbGFjZUhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17c2VhcmNoS2V5d29yZH1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgIHt0aGlzLmdldEJ1dHRvbigpfVxuICAgICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIHRvb2x0aXBEZWxheSxcbiAgICAgIGlzRHluYW1pYyxcbiAgICAgIGlzVG9vbHRpcEVuYWJsZWQsXG4gICAgICBtaW5DaGFycyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdG9vbHRpcFRleHQgPSB0cmFuc2xhdGlvbnMudG9vbHRpcDtcbiAgICBpZiAoIXRvb2x0aXBUZXh0KSB7XG4gICAgICBpZiAoaXNEeW5hbWljKSB7XG4gICAgICAgIHRvb2x0aXBUZXh0ID0gYFNlYXJjaCBzdGFydHMgd2hlbiB5b3UgaGF2ZSBlbnRlcmVkICR7bWluQ2hhcnN9IGNoYXJhY3RlcnMuYDtcbiAgICAgIH0gZWxzZSBpZiAobWluQ2hhcnMpIHtcbiAgICAgICAgdG9vbHRpcFRleHQgPSBgWW91IGNhbiBzZWFyY2ggd2hlbiB5b3UgaGF2ZSBlbnRlcmVkICR7bWluQ2hhcnN9IGNoYXJhY3RlcnMuYDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRvb2x0aXBUZXh0ICYmIGlzVG9vbHRpcEVuYWJsZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgb3ZlcmxheT17dGhpcy5nZXRUb29sdGlwKHRvb2x0aXBUZXh0KX1cbiAgICAgICAgICBkZWxheT17dG9vbHRpcERlbGF5fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2VhcmNoQmFyKCl9XG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJTZWFyY2hCYXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBpZD17YCR7aWR9LWNvbnRhaW5lcmB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=