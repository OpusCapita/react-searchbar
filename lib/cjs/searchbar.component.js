'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

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
  tooltipDelay: 0
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
    var value = (e.target.value || '').trim();
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
    var value = (e.target.value || '').trim();
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
    return _this2.state.value && _this2.props.dynamicSearchStartsFrom ? _react2.default.createElement('i', { className: 'fa fa-times' }) : _react2.default.createElement('i', { className: 'fa fa-search' });
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
            disabled: _this2.state.disabled
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJyZW5kZXJDb250ZW50IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2xvc2VDbGljayIsImlucHV0Q2xhc3NOYW1lIiwic2VhcmNoUGxhY2VIb2xkZXIiLCJ2YWx1ZSIsImR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIiwidG9vbHRpcCIsInRvb2x0aXBEZWxheSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm9uU2VhcmNoIiwib25EeW5hbWljU2VhcmNoIiwiZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJkeW5hbWljIiwiY2xvc2UiLCJic0NsYXNzIiwib25DbGljayIsImRpc2FibGVkIiwidHlwZSIsImdldEljb24iLCJnZXRUb29sdGlwIiwicmVuZGVyU2VhcmNoQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQU9BOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFzQm5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsTUFBS0MsUUFBTCxFQUFiO0FBRmlCO0FBR2xCOztzQkFzR0RDLE0scUJBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZUFBZjtBQUNHLFdBQUtDLGFBQUw7QUFESCxLQURGO0FBS0QsRzs7O0VBcklvQyxnQkFBTUMsYSxVQVlwQ0MsWSxHQUFlO0FBQ3BCQyxnQkFBYyx3QkFBTSxDQUFFLENBREY7QUFFcEJDLGtCQUFnQixFQUZJO0FBR3BCQyxxQkFBbUIsV0FIQztBQUlwQkMsU0FBTyxFQUph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ImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgT3ZlcmxheVRyaWdnZXIsXG4gIFRvb2x0aXAsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgJy4vc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbG9zZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIHRvb2x0aXBEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbG9zZUNsaWNrOiAoKSA9PiB7fSxcbiAgICBpbnB1dENsYXNzTmFtZTogJycsXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbTogMCxcbiAgICB0b29sdGlwOiAnJyxcbiAgICB0b29sdGlwRGVsYXk6IDAsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUobmV4dFByb3BzKSk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2ggPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaCh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfVxuXG4gIG9uRHluYW1pY1NlYXJjaCA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpLnRyaW0oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA8PSB2YWx1ZS5sZW5ndGggfHwgIXZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKHRoaXMucHJvcHMsIHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xuICAgIHRoaXMucHJvcHMub25DbG9zZUNsaWNrKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpLnRyaW0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcbiAgfVxuXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgPSAocHJvcHMgPSB0aGlzLnByb3BzLCB2YWx1ZSA9IHByb3BzLnZhbHVlKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25EeW5hbWljU2VhcmNoIDogdGhpcy5vbkNoYW5nZTtcbiAgICBjb25zdCBkeW5hbWljID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnZHluYW1pYy1zZWFyY2ggJyA6ICcnO1xuICAgIGNvbnN0IGNsb3NlID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnYnRuLWNsb3NlICcgOiAnJztcbiAgICBjb25zdCBic0NsYXNzID0gYCR7ZHluYW1pY30ke2Nsb3NlfWJ0bmA7XG4gICAgY29uc3Qgb25DbGljayA9IHZhbHVlICYmIHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbkNsb3NlQ2xpY2sgOiB0aGlzLm9uU2VhcmNoO1xuICAgIGNvbnN0IG9uS2V5RG93biA9ICFwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25LZXlEb3duIDogKCkgPT4ge307XG4gICAgY29uc3QgZGlzYWJsZWQgPSAhdmFsdWU7XG4gICAgY29uc3QgdHlwZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ3RleHQnIDogJ3NlYXJjaCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgYnNDbGFzcyxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICB2YWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgdHlwZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0SWNvbiA9ICgpID0+IChcbiAgICB0aGlzLnN0YXRlLnZhbHVlICYmIHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIC8+IDogPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgLz5cbiAgKVxuXG4gIGdldFRvb2x0aXAgPSB0b29sdGlwID0+IChcbiAgICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIj5cbiAgICAgIHt0b29sdGlwfVxuICAgIDwvVG9vbHRpcD5cbiAgKVxuXG4gIHJlbmRlclNlYXJjaEJhciA9ICgpID0+IChcbiAgICA8SW5wdXRHcm91cD5cbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnR5cGV9XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuc3RhdGUub25DaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5zdGF0ZS5vbktleURvd259XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlSG9sZGVyfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBic0NsYXNzPXt0aGlzLnN0YXRlLmJzQ2xhc3N9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5vbkNsaWNrfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuZ2V0SWNvbigpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSW5wdXRHcm91cC5CdXR0b24+XG4gICAgPC9JbnB1dEdyb3VwPlxuICApXG5cbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0b29sdGlwID0gdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSAmJiAhdGhpcy5wcm9wcy50b29sdGlwID9cbiAgICAgICdTZWFyY2ggc3RhcnRzIHdoZW4geW91IGhhdmUgZW50ZXJlZCBlbm91Z2ggY2hhcmFjdGVycy4nIDpcbiAgICAgIHRoaXMucHJvcHMudG9vbHRpcDtcbiAgICByZXR1cm4gKFxuICAgICAgdG9vbHRpcCA/XG4gICAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXt0aGlzLmdldFRvb2x0aXAodG9vbHRpcCl9IGRlbGF5PXt0aGlzLnByb3BzLnRvb2x0aXBEZWxheX0+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2VhcmNoQmFyKCl9XG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+IDpcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hCYXIoKVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VhcmNoLWJhclwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=