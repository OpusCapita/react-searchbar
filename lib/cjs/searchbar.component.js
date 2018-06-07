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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJyZW5kZXJDb250ZW50IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2xvc2VDbGljayIsImlucHV0Q2xhc3NOYW1lIiwic2VhcmNoUGxhY2VIb2xkZXIiLCJ2YWx1ZSIsImR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIiwidG9vbHRpcCIsInRvb2x0aXBEZWxheSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm9uU2VhcmNoIiwib25EeW5hbWljU2VhcmNoIiwiZSIsInRhcmdldCIsImxlbmd0aCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwia2V5Q29kZSIsImR5bmFtaWMiLCJjbG9zZSIsImJzQ2xhc3MiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ0eXBlIiwiZ2V0SWNvbiIsImdldFRvb2x0aXAiLCJyZW5kZXJTZWFyY2hCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBT0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFzQm5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsTUFBS0MsUUFBTCxFQUFiO0FBRmlCO0FBR2xCOztzQkFzR0RDLE0scUJBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZUFBZjtBQUNHLFdBQUtDLGFBQUw7QUFESCxLQURGO0FBS0QsRzs7O0VBcklvQyxnQkFBTUMsYSxVQVlwQ0MsWSxHQUFlO0FBQ3BCQyxnQkFBYyx3QkFBTSxDQUFFLENBREY7QUFFcEJDLGtCQUFnQixFQUZJO0FBR3BCQyxxQkFBbUIsV0FIQztBQUlwQkMs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QUFBLEc7O09BTWJxQixlLEdBQWtCO0FBQUEsV0FDaEI7QUFBQTtBQUFBO0FBQ0U7QUFDRSxjQUFNLE9BQUtoQyxLQUFMLENBQVc2QixJQURuQjtBQUVFLG1CQUFXLE9BQUs5QixLQUFMLENBQVdRLGNBRnhCO0FBR0Usa0JBQVUsT0FBS1AsS0FBTCxDQUFXcUIsUUFIdkI7QUFJRSxtQkFBVyxPQUFLckIsS0FBTCxDQUFXc0IsU0FKeEI7QUFLRSxxQkFBYSxPQUFLdkIsS0FBTCxDQUFXUyxpQkFMMUI7QUFNRSxlQUFPLE9BQUtSLEtBQUwsQ0FBV1M7QUFOcEIsUUFERjtBQVNFO0FBQUEsbUNBQVksTUFBWjtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQVMsT0FBS1QsS0FBTCxDQUFXMEIsT0FEdEI7QUFFRSxxQkFBUyxPQUFLMUIsS0FBTCxDQUFXMkIsT0FGdEI7QUFHRSxzQkFBVSxPQUFLM0IsS0FBTCxDQUFXNEI7QUFIdkI7QUFLRyxpQkFBS0UsT0FBTDtBQUxIO0FBREY7QUFURixLQURnQjtBQUFBLEc7O09Bc0JsQjNCLGEsR0FBZ0IsWUFBTTtBQUNwQixRQUFNUSxVQUFVLE9BQUtaLEtBQUwsQ0FBV1csdUJBQVgsSUFBc0MsQ0FBQyxPQUFLWCxLQUFMLENBQVdZLE9BQWxELEdBQ2Qsd0RBRGMsR0FFZCxPQUFLWixLQUFMLENBQVdZLE9BRmI7QUFHQSxXQUNFQSxVQUNFO0FBQUE7QUFBQSxRQUFnQixXQUFVLFFBQTFCLEVBQW1DLFNBQVMsT0FBS29CLFVBQUwsQ0FBZ0JwQixPQUFoQixDQUE1QyxFQUFzRSxPQUFPLE9BQUtaLEtBQUwsQ0FBV2EsWUFBeEY7QUFDRyxhQUFLb0IsZUFBTDtBQURILEtBREYsR0FJRSxPQUFLQSxlQUFMLEVBTEo7QUFPRCxHOztrQkE3SGtCbEMsUyIsImZpbGUiOiJzZWFyY2hiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgSW5wdXRHcm91cCxcclxuICBGb3JtQ29udHJvbCxcclxuICBPdmVybGF5VHJpZ2dlcixcclxuICBUb29sdGlwLFxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBGYVNlYXJjaCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc2VhcmNoJztcclxuaW1wb3J0IEZhQ2xvc2UgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2Nsb3NlJztcclxuXHJcbmltcG9ydCAnLi9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIHRvb2x0aXBEZWxheTogUHJvcFR5cGVzLm51bWJlcixcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvbkNsb3NlQ2xpY2s6ICgpID0+IHt9LFxyXG4gICAgaW5wdXRDbGFzc05hbWU6ICcnLFxyXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6ICdTZWFyY2guLi4nLFxyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IDAsXHJcbiAgICB0b29sdGlwOiAnJyxcclxuICAgIHRvb2x0aXBEZWxheTogMCxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcclxuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKG5leHRQcm9wcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWFyY2ggPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25EeW5hbWljU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcclxuICAgIGlmICh0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIDw9IHZhbHVlLmxlbmd0aCB8fCAhdmFsdWUpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xvc2VDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xyXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ2xpY2soKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duID0gKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgJiYgZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICB0aGlzLm9uU2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0ZSA9IChwcm9wcyA9IHRoaXMucHJvcHMsIHZhbHVlID0gcHJvcHMudmFsdWUpID0+IHtcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uRHluYW1pY1NlYXJjaCA6IHRoaXMub25DaGFuZ2U7XHJcbiAgICBjb25zdCBkeW5hbWljID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnZHluYW1pYy1zZWFyY2ggJyA6ICcnO1xyXG4gICAgY29uc3QgY2xvc2UgPSB2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdidG4tY2xvc2UgJyA6ICcnO1xyXG4gICAgY29uc3QgYnNDbGFzcyA9IGAke2R5bmFtaWN9JHtjbG9zZX1idG5gO1xyXG4gICAgY29uc3Qgb25DbGljayA9IHZhbHVlICYmIHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbkNsb3NlQ2xpY2sgOiB0aGlzLm9uU2VhcmNoO1xyXG4gICAgY29uc3Qgb25LZXlEb3duID0gIXByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbktleURvd24gOiAoKSA9PiB7fTtcclxuICAgIGNvbnN0IGRpc2FibGVkID0gIXZhbHVlO1xyXG4gICAgY29uc3QgdHlwZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ3RleHQnIDogJ3NlYXJjaCc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvbkNoYW5nZSxcclxuICAgICAgb25LZXlEb3duLFxyXG4gICAgICBic0NsYXNzLFxyXG4gICAgICBvbkNsaWNrLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHR5cGUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SWNvbiA9ICgpID0+IChcclxuICAgIHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IDxGYUNsb3NlIC8+IDogPEZhU2VhcmNoIC8+XHJcbiAgKVxyXG5cclxuICBnZXRUb29sdGlwID0gdG9vbHRpcCA9PiAoXHJcbiAgICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIj5cclxuICAgICAge3Rvb2x0aXB9XHJcbiAgICA8L1Rvb2x0aXA+XHJcbiAgKVxyXG5cclxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiAoXHJcbiAgICA8SW5wdXRHcm91cD5cclxuICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50eXBlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zdGF0ZS5vbkNoYW5nZX1cclxuICAgICAgICBvbktleURvd249e3RoaXMuc3RhdGUub25LZXlEb3dufVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlSG9sZGVyfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRHcm91cC5CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgYnNDbGFzcz17dGhpcy5zdGF0ZS5ic0NsYXNzfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5vbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMuZ2V0SWNvbigpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxyXG4gICAgPC9JbnB1dEdyb3VwPlxyXG4gIClcclxuXHJcbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tICYmICF0aGlzLnByb3BzLnRvb2x0aXAgP1xyXG4gICAgICAnU2VhcmNoIHN0YXJ0cyB3aGVuIHlvdSBoYXZlIGVudGVyZWQgZW5vdWdoIGNoYXJhY3RlcnMuJyA6XHJcbiAgICAgIHRoaXMucHJvcHMudG9vbHRpcDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRvb2x0aXAgP1xyXG4gICAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXt0aGlzLmdldFRvb2x0aXAodG9vbHRpcCl9IGRlbGF5PXt0aGlzLnByb3BzLnRvb2x0aXBEZWxheX0+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWFyY2hCYXIoKX1cclxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiA6XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hCYXIoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VhcmNoLWJhclwiPlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=