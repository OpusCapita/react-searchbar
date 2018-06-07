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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJyZW5kZXJDb250ZW50IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2xvc2VDbGljayIsImlucHV0Q2xhc3NOYW1lIiwic2VhcmNoUGxhY2VIb2xkZXIiLCJ2YWx1ZSIsImR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIiwidG9vbHRpcCIsInRvb2x0aXBEZWxheSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm9uU2VhcmNoIiwib25EeW5hbWljU2VhcmNoIiwiZSIsInRhcmdldCIsImxlbmd0aCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwia2V5Q29kZSIsImR5bmFtaWMiLCJjbG9zZSIsImJzQ2xhc3MiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ0eXBlIiwiZ2V0SWNvbiIsImdldFRvb2x0aXAiLCJyZW5kZXJTZWFyY2hCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBT0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFzQm5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsTUFBS0MsUUFBTCxFQUFiO0FBRmlCO0FBR2xCOztzQkFzR0RDLE0scUJBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZUFBZjtBQUNHLFdBQUtDLGFBQUw7QUFESCxLQURGO0FBS0QsRzs7O0VBcklvQyxnQkFBTUMsYSxVQVlwQ0MsWSxHQUFlO0FBQ3BCQyxnQkFBYyx3QkFBTSxDQUFFLENBREY7QUFFcEJDLGtCQUFnQixFQUZJO0FBR3BCQyxxQkFBbUIsV0FIQztBQUlwQkMs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QUFBLEc7O09BTWJxQixlLEdBQWtCO0FBQUEsV0FDaEI7QUFBQTtBQUFBO0FBQ0U7QUFDRSxjQUFNLE9BQUtoQyxLQUFMLENBQVc2QixJQURuQjtBQUVFLG1CQUFXLE9BQUs5QixLQUFMLENBQVdRLGNBRnhCO0FBR0Usa0JBQVUsT0FBS1AsS0FBTCxDQUFXcUIsUUFIdkI7QUFJRSxtQkFBVyxPQUFLckIsS0FBTCxDQUFXc0IsU0FKeEI7QUFLRSxxQkFBYSxPQUFLdkIsS0FBTCxDQUFXUyxpQkFMMUI7QUFNRSxlQUFPLE9BQUtSLEtBQUwsQ0FBV1M7QUFOcEIsUUFERjtBQVNFO0FBQUEsbUNBQVksTUFBWjtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQVMsT0FBS1QsS0FBTCxDQUFXMEIsT0FEdEI7QUFFRSxxQkFBUyxPQUFLMUIsS0FBTCxDQUFXMkIsT0FGdEI7QUFHRSxzQkFBVSxPQUFLM0IsS0FBTCxDQUFXNEI7QUFIdkI7QUFLRyxpQkFBS0UsT0FBTDtBQUxIO0FBREY7QUFURixLQURnQjtBQUFBLEc7O09Bc0JsQjNCLGEsR0FBZ0IsWUFBTTtBQUNwQixRQUFNUSxVQUFVLE9BQUtaLEtBQUwsQ0FBV1csdUJBQVgsSUFBc0MsQ0FBQyxPQUFLWCxLQUFMLENBQVdZLE9BQWxELEdBQ2Qsd0RBRGMsR0FFZCxPQUFLWixLQUFMLENBQVdZLE9BRmI7QUFHQSxXQUNFQSxVQUNFO0FBQUE7QUFBQSxRQUFnQixXQUFVLFFBQTFCLEVBQW1DLFNBQVMsT0FBS29CLFVBQUwsQ0FBZ0JwQixPQUFoQixDQUE1QyxFQUFzRSxPQUFPLE9BQUtaLEtBQUwsQ0FBV2EsWUFBeEY7QUFDRyxhQUFLb0IsZUFBTDtBQURILEtBREYsR0FJRSxPQUFLQSxlQUFMLEVBTEo7QUFPRCxHOztrQkE3SGtCbEMsUyIsImZpbGUiOiJzZWFyY2hiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBGYVNlYXJjaCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc2VhcmNoJztcbmltcG9ydCBGYUNsb3NlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jbG9zZSc7XG5cbmltcG9ydCAnLi9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3NlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlYXJjaFBsYWNlSG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgdG9vbHRpcERlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsb3NlQ2xpY2s6ICgpID0+IHt9LFxuICAgIGlucHV0Q2xhc3NOYW1lOiAnJyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiAwLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIHRvb2x0aXBEZWxheTogMCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZShuZXh0UHJvcHMpKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG5cbiAgb25EeW5hbWljU2VhcmNoID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldC52YWx1ZSB8fCAnJyk7XG4gICAgaWYgKHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPD0gdmFsdWUubGVuZ3RoIHx8ICF2YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKCcnKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDbGljaygpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcbiAgfVxuXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgPSAocHJvcHMgPSB0aGlzLnByb3BzLCB2YWx1ZSA9IHByb3BzLnZhbHVlKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25EeW5hbWljU2VhcmNoIDogdGhpcy5vbkNoYW5nZTtcbiAgICBjb25zdCBkeW5hbWljID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnZHluYW1pYy1zZWFyY2ggJyA6ICcnO1xuICAgIGNvbnN0IGNsb3NlID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnYnRuLWNsb3NlICcgOiAnJztcbiAgICBjb25zdCBic0NsYXNzID0gYCR7ZHluYW1pY30ke2Nsb3NlfWJ0bmA7XG4gICAgY29uc3Qgb25DbGljayA9IHZhbHVlICYmIHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbkNsb3NlQ2xpY2sgOiB0aGlzLm9uU2VhcmNoO1xuICAgIGNvbnN0IG9uS2V5RG93biA9ICFwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25LZXlEb3duIDogKCkgPT4ge307XG4gICAgY29uc3QgZGlzYWJsZWQgPSAhdmFsdWU7XG4gICAgY29uc3QgdHlwZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ3RleHQnIDogJ3NlYXJjaCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgYnNDbGFzcyxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICB2YWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgdHlwZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0SWNvbiA9ICgpID0+IChcbiAgICB0aGlzLnN0YXRlLnZhbHVlICYmIHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyA8RmFDbG9zZSAvPiA6IDxGYVNlYXJjaCAvPlxuICApXG5cbiAgZ2V0VG9vbHRpcCA9IHRvb2x0aXAgPT4gKFxuICAgIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPlxuICAgICAge3Rvb2x0aXB9XG4gICAgPC9Ub29sdGlwPlxuICApXG5cbiAgcmVuZGVyU2VhcmNoQmFyID0gKCkgPT4gKFxuICAgIDxJbnB1dEdyb3VwPlxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIHR5cGU9e3RoaXMuc3RhdGUudHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zdGF0ZS5vbkNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLnN0YXRlLm9uS2V5RG93bn1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2VIb2xkZXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJzQ2xhc3M9e3RoaXMuc3RhdGUuYnNDbGFzc31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5nZXRJY29uKCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9JbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICA8L0lucHV0R3JvdXA+XG4gIClcblxuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tICYmICF0aGlzLnByb3BzLnRvb2x0aXAgP1xuICAgICAgJ1NlYXJjaCBzdGFydHMgd2hlbiB5b3UgaGF2ZSBlbnRlcmVkIGVub3VnaCBjaGFyYWN0ZXJzLicgOlxuICAgICAgdGhpcy5wcm9wcy50b29sdGlwO1xuICAgIHJldHVybiAoXG4gICAgICB0b29sdGlwID9cbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9e3RoaXMuZ2V0VG9vbHRpcCh0b29sdGlwKX0gZGVsYXk9e3RoaXMucHJvcHMudG9vbHRpcERlbGF5fT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWFyY2hCYXIoKX1cbiAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj4gOlxuICAgICAgICB0aGlzLnJlbmRlclNlYXJjaEJhcigpXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWFyY2gtYmFyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==