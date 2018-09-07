var _class, _temp, _initialiseProps;

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

    _initialiseProps.call(_this);

    _this.state = _this.getState();
    return _this;
  }

  SearchBar.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'oc-search-bar' },
      this.renderContent()
    );
  };

  return SearchBar;
}(React.PureComponent), _class.defaultProps = {
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
    return _this2.state.value && _this2.props.dynamicSearchStartsFrom ? React.createElement(FaClose, null) : React.createElement(FaSearch, null);
  };

  this.getTooltip = function (tooltip) {
    return React.createElement(
      Tooltip,
      { id: 'tooltip' },
      tooltip
    );
  };

  this.renderSearchBar = function () {
    return React.createElement(
      InputGroup,
      null,
      React.createElement(FormControl, {
        type: _this2.state.type,
        className: _this2.props.inputClassName,
        onChange: _this2.state.onChange,
        onKeyDown: _this2.state.onKeyDown,
        placeholder: _this2.props.searchPlaceHolder,
        value: _this2.state.value
      }),
      React.createElement(
        InputGroup.Button,
        null,
        React.createElement(
          Button,
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
    return tooltip ? React.createElement(
      OverlayTrigger,
      { placement: 'bottom', overlay: _this2.getTooltip(tooltip), delay: _this2.props.tooltipDelay },
      _this2.renderSearchBar()
    ) : _this2.renderSearchBar();
  };
}, _temp);
export { SearchBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkZhU2VhcmNoIiwiRmFDbG9zZSIsIlNlYXJjaEJhciIsInByb3BzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsInJlbmRlckNvbnRlbnQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DbG9zZUNsaWNrIiwiaW5wdXRDbGFzc05hbWUiLCJzZWFyY2hQbGFjZUhvbGRlciIsInZhbHVlIiwiZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20iLCJ0b29sdGlwIiwidG9vbHRpcERlbGF5IiwiYWxsb3dFbXB0eVNlYXJjaCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm9uU2VhcmNoIiwib25EeW5hbWljU2VhcmNoIiwiZSIsInRhcmdldCIsImxlbmd0aCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwia2V5Q29kZSIsImR5bmFtaWMiLCJjbG9zZSIsImJzQ2xhc3MiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ0eXBlIiwiZ2V0SWNvbiIsImdldFRvb2x0aXAiLCJyZW5kZXJTZWFyY2hCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUNFQyxNQURGLEVBRUVDLFVBRkYsRUFHRUMsV0FIRixFQUlFQyxjQUpGLEVBS0VDLE9BTEYsUUFNTyxpQkFOUDtBQU9BLE9BQU9DLFFBQVAsTUFBcUIsMkJBQXJCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7O0FBRUEsT0FBTyw0QkFBUDs7SUFFcUJDLFM7OztBQXlCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFB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LE9BQUtaLEtBQUwsQ0FBV1csdUJBQVgsSUFBc0MsQ0FBQyxPQUFLWCxLQUFMLENBQVdZLE9BQWxELEdBQ2Qsd0RBRGMsR0FFZCxPQUFLWixLQUFMLENBQVdZLE9BRmI7QUFHQSxXQUNFQSxVQUNFO0FBQUMsb0JBQUQ7QUFBQSxRQUFnQixXQUFVLFFBQTFCLEVBQW1DLFNBQVMsT0FBS3FCLFVBQUwsQ0FBZ0JyQixPQUFoQixDQUE1QyxFQUFzRSxPQUFPLE9BQUtaLEtBQUwsQ0FBV2EsWUFBeEY7QUFDRyxhQUFLcUIsZUFBTDtBQURILEtBREYsR0FJRSxPQUFLQSxlQUFMLEVBTEo7QUFPRCxHOztTQWxJa0JuQyxTIiwiZmlsZSI6InNlYXJjaGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSW5wdXRHcm91cCxcbiAgRm9ybUNvbnRyb2wsXG4gIE92ZXJsYXlUcmlnZ2VyLFxuICBUb29sdGlwLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEZhU2VhcmNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9zZWFyY2gnO1xuaW1wb3J0IEZhQ2xvc2UgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2Nsb3NlJztcblxuaW1wb3J0ICcuL3NlYXJjaGJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2xvc2VDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB0b29sdGlwRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYWxsb3dFbXB0eVNlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xvc2VDbGljazogKCkgPT4ge1xuICAgIH0sXG4gICAgaW5wdXRDbGFzc05hbWU6ICcnLFxuICAgIHNlYXJjaFBsYWNlSG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICB2YWx1ZTogJycsXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IDAsXG4gICAgdG9vbHRpcDogJycsXG4gICAgdG9vbHRpcERlbGF5OiAwLFxuICAgIGFsbG93RW1wdHlTZWFyY2g6IGZhbHNlLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKG5leHRQcm9wcykpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2godGhpcy5zdGF0ZS52YWx1ZSk7XG4gIH1cblxuICBvbkR5bmFtaWNTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA8PSB2YWx1ZS5sZW5ndGggfHwgIXZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKHRoaXMucHJvcHMsIHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xuICAgIHRoaXMucHJvcHMub25DbG9zZUNsaWNrKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMub25TZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSA9IChwcm9wcyA9IHRoaXMucHJvcHMsIHZhbHVlID0gcHJvcHMudmFsdWUpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbkR5bmFtaWNTZWFyY2ggOiB0aGlzLm9uQ2hhbmdlO1xuICAgIGNvbnN0IGR5bmFtaWMgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdkeW5hbWljLXNlYXJjaCAnIDogJyc7XG4gICAgY29uc3QgY2xvc2UgPSB2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdidG4tY2xvc2UgJyA6ICcnO1xuICAgIGNvbnN0IGJzQ2xhc3MgPSBgJHtkeW5hbWljfSR7Y2xvc2V9YnRuYDtcbiAgICBjb25zdCBvbkNsaWNrID0gKHZhbHVlICYmIHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tKSB8fFxuICAgIHByb3BzLmFsbG93RW1wdHlTZWFyY2ggPyB0aGlzLm9uQ2xvc2VDbGljayA6IHRoaXMub25TZWFyY2g7XG4gICAgY29uc3Qgb25LZXlEb3duID0gIXByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbktleURvd24gOiAoKSA9PiB7XG4gICAgfTtcbiAgICBjb25zdCBkaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICBjb25zdCB0eXBlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAndGV4dCcgOiAnc2VhcmNoJztcbiAgICByZXR1cm4ge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbktleURvd24sXG4gICAgICBic0NsYXNzLFxuICAgICAgb25DbGljayxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB0eXBlLFxuICAgIH07XG4gIH1cblxuICBnZXRJY29uID0gKCkgPT4gKFxuICAgIHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IDxGYUNsb3NlIC8+IDogPEZhU2VhcmNoIC8+XG4gIClcblxuICBnZXRUb29sdGlwID0gdG9vbHRpcCA9PiAoXG4gICAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+XG4gICAgICB7dG9vbHRpcH1cbiAgICA8L1Rvb2x0aXA+XG4gIClcblxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiAoXG4gICAgPElucHV0R3JvdXA+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaW5wdXRDbGFzc05hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnN0YXRlLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMuc3RhdGUub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZUhvbGRlcn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYnNDbGFzcz17dGhpcy5zdGF0ZS5ic0NsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUub25DbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17IXRoaXMucHJvcHMuYWxsb3dFbXB0eVNlYXJjaCAmJiB0aGlzLnN0YXRlLmRpc2FibGVkfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuZ2V0SWNvbigpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSW5wdXRHcm91cC5CdXR0b24+XG4gICAgPC9JbnB1dEdyb3VwPlxuICApXG5cbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0b29sdGlwID0gdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSAmJiAhdGhpcy5wcm9wcy50b29sdGlwID9cbiAgICAgICdTZWFyY2ggc3RhcnRzIHdoZW4geW91IGhhdmUgZW50ZXJlZCBlbm91Z2ggY2hhcmFjdGVycy4nIDpcbiAgICAgIHRoaXMucHJvcHMudG9vbHRpcDtcbiAgICByZXR1cm4gKFxuICAgICAgdG9vbHRpcCA/XG4gICAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXt0aGlzLmdldFRvb2x0aXAodG9vbHRpcCl9IGRlbGF5PXt0aGlzLnByb3BzLnRvb2x0aXBEZWxheX0+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2VhcmNoQmFyKCl9XG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+IDpcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hCYXIoKVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VhcmNoLWJhclwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=