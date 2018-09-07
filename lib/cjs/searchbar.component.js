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
    var onClick = value && props.dynamicSearchStartsFrom || props.allowEmptySearch ? _this2.onCloseClick : _this2.onSearch;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJyZW5kZXJDb250ZW50IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2xvc2VDbGljayIsImlucHV0Q2xhc3NOYW1lIiwic2VhcmNoUGxhY2VIb2xkZXIiLCJ2YWx1ZSIsImR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIiwidG9vbHRpcCIsInRvb2x0aXBEZWxheSIsImFsbG93RW1wdHlTZWFyY2giLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJvblNlYXJjaCIsIm9uRHluYW1pY1NlYXJjaCIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJkeW5hbWljIiwiY2xvc2UiLCJic0NsYXNzIiwib25DbGljayIsImRpc2FibGVkIiwidHlwZSIsImdldEljb24iLCJnZXRUb29sdGlwIiwicmVuZGVyU2VhcmNoQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQU9BOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBeUJuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLE1BQUtDLFFBQUwsRUFBYjtBQUZpQjtBQUdsQjs7c0JBd0dEQyxNLHFCQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFDRyxXQUFLQyxhQUFMO0FBREgsS0FERjtBQUtELEc7OztFQTFJb0MsZ0JBQU1DLGEsVUFhcENDLFksR0FBZTtBQUNwQkMsZ0JBQWMsd0JBQU0sQ0FDbkIsQ0FGbUI7QUFHcEJDLGtCQUFnQixFQUhJO0FBSXBC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ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBGYVNlYXJjaCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc2VhcmNoJztcbmltcG9ydCBGYUNsb3NlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jbG9zZSc7XG5cbmltcG9ydCAnLi9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3NlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlYXJjaFBsYWNlSG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgdG9vbHRpcERlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGFsbG93RW1wdHlTZWFyY2g6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsb3NlQ2xpY2s6ICgpID0+IHtcbiAgICB9LFxuICAgIGlucHV0Q2xhc3NOYW1lOiAnJyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiAwLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIHRvb2x0aXBEZWxheTogMCxcbiAgICBhbGxvd0VtcHR5U2VhcmNoOiBmYWxzZSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZShuZXh0UHJvcHMpKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG5cbiAgb25EeW5hbWljU2VhcmNoID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldC52YWx1ZSB8fCAnJyk7XG4gICAgaWYgKHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPD0gdmFsdWUubGVuZ3RoIHx8ICF2YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKCcnKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDbGljaygpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcbiAgfVxuXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgPSAocHJvcHMgPSB0aGlzLnByb3BzLCB2YWx1ZSA9IHByb3BzLnZhbHVlKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25EeW5hbWljU2VhcmNoIDogdGhpcy5vbkNoYW5nZTtcbiAgICBjb25zdCBkeW5hbWljID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnZHluYW1pYy1zZWFyY2ggJyA6ICcnO1xuICAgIGNvbnN0IGNsb3NlID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnYnRuLWNsb3NlICcgOiAnJztcbiAgICBjb25zdCBic0NsYXNzID0gYCR7ZHluYW1pY30ke2Nsb3NlfWJ0bmA7XG4gICAgY29uc3Qgb25DbGljayA9ICh2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSkgfHxcbiAgICBwcm9wcy5hbGxvd0VtcHR5U2VhcmNoID8gdGhpcy5vbkNsb3NlQ2xpY2sgOiB0aGlzLm9uU2VhcmNoO1xuICAgIGNvbnN0IG9uS2V5RG93biA9ICFwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25LZXlEb3duIDogKCkgPT4ge1xuICAgIH07XG4gICAgY29uc3QgZGlzYWJsZWQgPSAhdmFsdWU7XG4gICAgY29uc3QgdHlwZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ3RleHQnIDogJ3NlYXJjaCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgYnNDbGFzcyxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICB2YWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgdHlwZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0SWNvbiA9ICgpID0+IChcbiAgICB0aGlzLnN0YXRlLnZhbHVlICYmIHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyA8RmFDbG9zZSAvPiA6IDxGYVNlYXJjaCAvPlxuICApXG5cbiAgZ2V0VG9vbHRpcCA9IHRvb2x0aXAgPT4gKFxuICAgIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPlxuICAgICAge3Rvb2x0aXB9XG4gICAgPC9Ub29sdGlwPlxuICApXG5cbiAgcmVuZGVyU2VhcmNoQmFyID0gKCkgPT4gKFxuICAgIDxJbnB1dEdyb3VwPlxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIHR5cGU9e3RoaXMuc3RhdGUudHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zdGF0ZS5vbkNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLnN0YXRlLm9uS2V5RG93bn1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2VIb2xkZXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJzQ2xhc3M9e3RoaXMuc3RhdGUuYnNDbGFzc31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmFsbG93RW1wdHlTZWFyY2ggJiYgdGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLmdldEljb24oKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgIDwvSW5wdXRHcm91cD5cbiAgKVxuXG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gJiYgIXRoaXMucHJvcHMudG9vbHRpcCA/XG4gICAgICAnU2VhcmNoIHN0YXJ0cyB3aGVuIHlvdSBoYXZlIGVudGVyZWQgZW5vdWdoIGNoYXJhY3RlcnMuJyA6XG4gICAgICB0aGlzLnByb3BzLnRvb2x0aXA7XG4gICAgcmV0dXJuIChcbiAgICAgIHRvb2x0aXAgP1xuICAgICAgICA8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgb3ZlcmxheT17dGhpcy5nZXRUb29sdGlwKHRvb2x0aXApfSBkZWxheT17dGhpcy5wcm9wcy50b29sdGlwRGVsYXl9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiA6XG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoQmFyKClcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlYXJjaC1iYXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19