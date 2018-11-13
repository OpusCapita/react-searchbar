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
      { id: this.props.id + '-container', className: 'oc-search-bar' },
      this.renderContent()
    );
  };

  return SearchBar;
}(_react2.default.PureComponent), _class.defaultProps = {
  id: 'oc-react-searchbar',
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
        id: _this2.props.id + '-input',
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
            id: _this2.props.id + '-button',
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
      {
        placement: 'bottom',
        overlay: _this2.getTooltip(tooltip),
        delay: _this2.props.tooltipDelay
      },
      _this2.renderSearchBar()
    ) : _this2.renderSearchBar();
  };
}, _temp);
exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJpZCIsInJlbmRlckNvbnRlbnQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNsb3NlQ2xpY2siLCJpbnB1dENsYXNzTmFtZSIsInNlYXJjaFBsYWNlSG9sZGVyIiwidmFsdWUiLCJkeW5hbWljU2VhcmNoU3RhcnRzRnJvbSIsInRvb2x0aXAiLCJ0b29sdGlwRGVsYXkiLCJhbGxvd0VtcHR5U2VhcmNoIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwib25TZWFyY2giLCJvbkR5bmFtaWNTZWFyY2giLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJrZXlDb2RlIiwiZHluYW1pYyIsImNsb3NlIiwiYnNDbGFzcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInR5cGUiLCJnZXRJY29uIiwiZ2V0VG9vbHRpcCIsInJlbmRlclNlYXJjaEJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFPQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQTJCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxNQUFLQyxRQUFMLEVBQWI7QUFGaUI7QUFHbEI7O3NCQTZHREMsTSxxQkFBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBTyxLQUFLSCxLQUFMLENBQVdJLEVBQWxCLGVBQUwsRUFBdUMsV0FBVSxlQUFqRDtBQUNHLFdBQUtDLGFBQUw7QUFESCxLQURGO0FBS0QsRzs7O0VBakpvQ0MsZ0JBQU1DLGEsVUFjcENDLFksR0FBZTtB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QyxvQ0FBRDtBQUFBO0FBQ0UsbUJBQVUsUUFEWjtBQUVFLGlCQUFTLE9BQUtxQixVQUFMLENBQWdCckIsT0FBaEIsQ0FGWDtBQUdFLGVBQU8sT0FBS2QsS0FBTCxDQUFXZTtBQUhwQjtBQUtHLGFBQUtxQixlQUFMO0FBTEgsS0FERixHQVFFLE9BQUtBLGVBQUwsRUFUSjtBQVdELEc7O2tCQXpJa0JyQyxTIiwiZmlsZSI6InNlYXJjaGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSW5wdXRHcm91cCxcbiAgRm9ybUNvbnRyb2wsXG4gIE92ZXJsYXlUcmlnZ2VyLFxuICBUb29sdGlwLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEZhU2VhcmNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9zZWFyY2gnO1xuaW1wb3J0IEZhQ2xvc2UgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2Nsb3NlJztcblxuaW1wb3J0ICcuL3NlYXJjaGJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2xvc2VDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB0b29sdGlwRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYWxsb3dFbXB0eVNlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnb2MtcmVhY3Qtc2VhcmNoYmFyJyxcbiAgICBvbkNsb3NlQ2xpY2s6ICgpID0+IHtcbiAgICB9LFxuICAgIGlucHV0Q2xhc3NOYW1lOiAnJyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiAwLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIHRvb2x0aXBEZWxheTogMCxcbiAgICBhbGxvd0VtcHR5U2VhcmNoOiBmYWxzZSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZShuZXh0UHJvcHMpKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG5cbiAgb25EeW5hbWljU2VhcmNoID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldC52YWx1ZSB8fCAnJyk7XG4gICAgaWYgKHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPD0gdmFsdWUubGVuZ3RoIHx8ICF2YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKCcnKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDbGljaygpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcbiAgfVxuXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgPSAocHJvcHMgPSB0aGlzLnByb3BzLCB2YWx1ZSA9IHByb3BzLnZhbHVlKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25EeW5hbWljU2VhcmNoIDogdGhpcy5vbkNoYW5nZTtcbiAgICBjb25zdCBkeW5hbWljID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnZHluYW1pYy1zZWFyY2ggJyA6ICcnO1xuICAgIGNvbnN0IGNsb3NlID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnYnRuLWNsb3NlICcgOiAnJztcbiAgICBjb25zdCBic0NsYXNzID0gYCR7ZHluYW1pY30ke2Nsb3NlfWJ0bmA7XG4gICAgY29uc3Qgb25DbGljayA9ICh2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSkgPyB0aGlzLm9uQ2xvc2VDbGljayA6IHRoaXMub25TZWFyY2g7XG4gICAgY29uc3Qgb25LZXlEb3duID0gIXByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbktleURvd24gOiAoKSA9PiB7XG4gICAgfTtcbiAgICBjb25zdCBkaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICBjb25zdCB0eXBlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAndGV4dCcgOiAnc2VhcmNoJztcbiAgICByZXR1cm4ge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbktleURvd24sXG4gICAgICBic0NsYXNzLFxuICAgICAgb25DbGljayxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB0eXBlLFxuICAgIH07XG4gIH1cblxuICBnZXRJY29uID0gKCkgPT4gKFxuICAgIHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IDxGYUNsb3NlIC8+IDogPEZhU2VhcmNoIC8+XG4gIClcblxuICBnZXRUb29sdGlwID0gdG9vbHRpcCA9PiAoXG4gICAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+XG4gICAgICB7dG9vbHRpcH1cbiAgICA8L1Rvb2x0aXA+XG4gIClcblxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiAoXG4gICAgPElucHV0R3JvdXA+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgaWQ9e2Ake3RoaXMucHJvcHMuaWR9LWlucHV0YH1cbiAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaW5wdXRDbGFzc05hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnN0YXRlLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMuc3RhdGUub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZUhvbGRlcn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9e2Ake3RoaXMucHJvcHMuaWR9LWJ1dHRvbmB9XG4gICAgICAgICAgYnNDbGFzcz17dGhpcy5zdGF0ZS5ic0NsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUub25DbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17IXRoaXMucHJvcHMuYWxsb3dFbXB0eVNlYXJjaCAmJiB0aGlzLnN0YXRlLmRpc2FibGVkfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuZ2V0SWNvbigpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSW5wdXRHcm91cC5CdXR0b24+XG4gICAgPC9JbnB1dEdyb3VwPlxuICApXG5cbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0b29sdGlwID0gdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSAmJiAhdGhpcy5wcm9wcy50b29sdGlwID9cbiAgICAgICdTZWFyY2ggc3RhcnRzIHdoZW4geW91IGhhdmUgZW50ZXJlZCBlbm91Z2ggY2hhcmFjdGVycy4nIDpcbiAgICAgIHRoaXMucHJvcHMudG9vbHRpcDtcbiAgICByZXR1cm4gKFxuICAgICAgdG9vbHRpcCA/XG4gICAgICAgIDxPdmVybGF5VHJpZ2dlclxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgb3ZlcmxheT17dGhpcy5nZXRUb29sdGlwKHRvb2x0aXApfVxuICAgICAgICAgIGRlbGF5PXt0aGlzLnByb3BzLnRvb2x0aXBEZWxheX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiA6XG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoQmFyKClcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtgJHt0aGlzLnByb3BzLmlkfS1jb250YWluZXJgfSBjbGFzc05hbWU9XCJvYy1zZWFyY2gtYmFyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==