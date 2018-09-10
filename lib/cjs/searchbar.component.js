'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp, _initialiseProps;

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

    _initialiseProps.call(_this);

    _this.state = _this.getState();
    return _this;
  }

  SearchBar.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'oc-search-bar' },
      this.renderContent()
    );
  };

  return SearchBar;
}(_react2.default.PureComponent), _class.defaultProps = {
  onCloseClick: function onCloseClick() {},
  inputClassName: '',
  searchPlaceHolder: 'Search...',
  value: '',
  dynamicSearchStartsFrom: 0,
  tooltip: '',
  tooltipDelay: 0,
  allowEmptySearch: false
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (nextProps) {
    if (nextProps.value !== _this2.props.value) {
      _this2.setState(_this2.getState(nextProps));
    }
  };

  this.onSearch = function () {
    _this2.props.onSearch(_this2.state.value);
  };

  this.onDynamicSearch = function (e) {
    var value = e.target.value || '';
    if (_this2.props.dynamicSearchStartsFrom <= value.length || !value) {
      _this2.props.onSearch(value);
    } else {
      _this2.setState(_this2.getState(_this2.props, value));
    }
  };

  this.onCloseClick = function () {
    _this2.props.onSearch('');
    _this2.props.onCloseClick();
  };

  this.onChange = function (e) {
    var value = e.target.value || '';
    _this2.setState(_this2.getState(_this2.props, value));
  };

  this.onKeyDown = function (e) {
    if (e.keyCode && e.keyCode === 13) {
      _this2.onSearch();
    }
  };

  this.getState = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.props;
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.value;

    var onChange = props.dynamicSearchStartsFrom ? _this2.onDynamicSearch : _this2.onChange;
    var dynamic = props.dynamicSearchStartsFrom ? 'dynamic-search ' : '';
    var close = value && props.dynamicSearchStartsFrom ? 'btn-close ' : '';
    var bsClass = '' + dynamic + close + 'btn';
    var onClick = value && props.dynamicSearchStartsFrom ? _this2.onCloseClick : _this2.onSearch;
    var onKeyDown = !props.dynamicSearchStartsFrom ? _this2.onKeyDown : function () {};
    var disabled = !value;
    var type = props.dynamicSearchStartsFrom ? 'text' : 'search';
    return {
      onChange: onChange,
      onKeyDown: onKeyDown,
      bsClass: bsClass,
      onClick: onClick,
      value: value,
      disabled: disabled,
      type: type
    };
  };

  this.getIcon = function () {
    return _this2.state.value && _this2.props.dynamicSearchStartsFrom ? _react2.default.createElement(_close2.default, null) : _react2.default.createElement(_search2.default, null);
  };

  this.getTooltip = function (tooltip) {
    return _react2.default.createElement(
      _reactBootstrap.Tooltip,
      { id: 'tooltip' },
      tooltip
    );
  };

  this.renderSearchBar = function () {
    return _react2.default.createElement(
      _reactBootstrap.InputGroup,
      null,
      _react2.default.createElement(_reactBootstrap.FormControl, {
        type: _this2.state.type,
        className: _this2.props.inputClassName,
        onChange: _this2.state.onChange,
        onKeyDown: _this2.state.onKeyDown,
        placeholder: _this2.props.searchPlaceHolder,
        value: _this2.state.value
      }),
      _react2.default.createElement(
        _reactBootstrap.InputGroup.Button,
        null,
        _react2.default.createElement(
          _reactBootstrap.Button,
          {
            bsClass: _this2.state.bsClass,
            onClick: _this2.state.onClick,
            disabled: !_this2.props.allowEmptySearch && _this2.state.disabled
          },
          _this2.getIcon()
        )
      )
    );
  };

  this.renderContent = function () {
    var tooltip = _this2.props.dynamicSearchStartsFrom && !_this2.props.tooltip ? 'Search starts when you have entered enough characters.' : _this2.props.tooltip;
    return tooltip ? _react2.default.createElement(
      _reactBootstrap.OverlayTrigger,
      { placement: 'bottom', overlay: _this2.getTooltip(tooltip), delay: _this2.props.tooltipDelay },
      _this2.renderSearchBar()
    ) : _this2.renderSearchBar();
  };
}, _temp);
exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJyZW5kZXJDb250ZW50IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2xvc2VDbGljayIsImlucHV0Q2xhc3NOYW1lIiwic2VhcmNoUGxhY2VIb2xkZXIiLCJ2YWx1ZSIsImR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIiwidG9vbHRpcCIsInRvb2x0aXBEZWxheSIsImFsbG93RW1wdHlTZWFyY2giLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJvblNlYXJjaCIsIm9uRHluYW1pY1NlYXJjaCIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJkeW5hbWljIiwiY2xvc2UiLCJic0NsYXNzIiwib25DbGljayIsImRpc2FibGVkIiwidHlwZSIsImdldEljb24iLCJnZXRUb29sdGlwIiwicmVuZGVyU2VhcmNoQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQU9BOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBeUJuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLE1BQUtDLFFBQUwsRUFBYjtBQUZpQjtBQUdsQjs7c0JBdUdEQyxNLHFCQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFDRyxXQUFLQyxhQUFMO0FBREgsS0FERjtBQUtELEc7OztFQXpJb0MsZ0JBQU1DLGEsVUFhcENDLFksR0FBZTtBQUNwQkMsZ0JBQWMsd0JBQU0sQ0FDbkIsQ0FGbUI7QUFHcEJDLGtCQUFnQixFQUhJO0FBSXBC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b250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgT3ZlcmxheVRyaWdnZXIsXG4gIFRvb2x0aXAsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgRmFTZWFyY2ggZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3NlYXJjaCc7XG5pbXBvcnQgRmFDbG9zZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2xvc2UnO1xuXG5pbXBvcnQgJy4vc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbG9zZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIHRvb2x0aXBEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBhbGxvd0VtcHR5U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbG9zZUNsaWNrOiAoKSA9PiB7XG4gICAgfSxcbiAgICBpbnB1dENsYXNzTmFtZTogJycsXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbTogMCxcbiAgICB0b29sdGlwOiAnJyxcbiAgICB0b29sdGlwRGVsYXk6IDAsXG4gICAgYWxsb3dFbXB0eVNlYXJjaDogZmFsc2UsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUobmV4dFByb3BzKSk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2ggPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaCh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfVxuXG4gIG9uRHluYW1pY1NlYXJjaCA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpO1xuICAgIGlmICh0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIDw9IHZhbHVlLmxlbmd0aCB8fCAhdmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWFyY2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaCgnJyk7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ2xpY2soKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldC52YWx1ZSB8fCAnJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKHRoaXMucHJvcHMsIHZhbHVlKSk7XG4gIH1cblxuICBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5vblNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlID0gKHByb3BzID0gdGhpcy5wcm9wcywgdmFsdWUgPSBwcm9wcy52YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uRHluYW1pY1NlYXJjaCA6IHRoaXMub25DaGFuZ2U7XG4gICAgY29uc3QgZHluYW1pYyA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ2R5bmFtaWMtc2VhcmNoICcgOiAnJztcbiAgICBjb25zdCBjbG9zZSA9IHZhbHVlICYmIHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ2J0bi1jbG9zZSAnIDogJyc7XG4gICAgY29uc3QgYnNDbGFzcyA9IGAke2R5bmFtaWN9JHtjbG9zZX1idG5gO1xuICAgIGNvbnN0IG9uQ2xpY2sgPSAodmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20pID8gdGhpcy5vbkNsb3NlQ2xpY2sgOiB0aGlzLm9uU2VhcmNoO1xuICAgIGNvbnN0IG9uS2V5RG93biA9ICFwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25LZXlEb3duIDogKCkgPT4ge1xuICAgIH07XG4gICAgY29uc3QgZGlzYWJsZWQgPSAhdmFsdWU7XG4gICAgY29uc3QgdHlwZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ3RleHQnIDogJ3NlYXJjaCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgYnNDbGFzcyxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICB2YWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgdHlwZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0SWNvbiA9ICgpID0+IChcbiAgICB0aGlzLnN0YXRlLnZhbHVlICYmIHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyA8RmFDbG9zZSAvPiA6IDxGYVNlYXJjaCAvPlxuICApXG5cbiAgZ2V0VG9vbHRpcCA9IHRvb2x0aXAgPT4gKFxuICAgIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPlxuICAgICAge3Rvb2x0aXB9XG4gICAgPC9Ub29sdGlwPlxuICApXG5cbiAgcmVuZGVyU2VhcmNoQmFyID0gKCkgPT4gKFxuICAgIDxJbnB1dEdyb3VwPlxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIHR5cGU9e3RoaXMuc3RhdGUudHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zdGF0ZS5vbkNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLnN0YXRlLm9uS2V5RG93bn1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2VIb2xkZXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJzQ2xhc3M9e3RoaXMuc3RhdGUuYnNDbGFzc31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmFsbG93RW1wdHlTZWFyY2ggJiYgdGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLmdldEljb24oKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgIDwvSW5wdXRHcm91cD5cbiAgKVxuXG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gJiYgIXRoaXMucHJvcHMudG9vbHRpcCA/XG4gICAgICAnU2VhcmNoIHN0YXJ0cyB3aGVuIHlvdSBoYXZlIGVudGVyZWQgZW5vdWdoIGNoYXJhY3RlcnMuJyA6XG4gICAgICB0aGlzLnByb3BzLnRvb2x0aXA7XG4gICAgcmV0dXJuIChcbiAgICAgIHRvb2x0aXAgP1xuICAgICAgICA8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgb3ZlcmxheT17dGhpcy5nZXRUb29sdGlwKHRvb2x0aXApfSBkZWxheT17dGhpcy5wcm9wcy50b29sdGlwRGVsYXl9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiA6XG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoQmFyKClcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlYXJjaC1iYXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19