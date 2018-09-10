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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkZhU2VhcmNoIiwiRmFDbG9zZSIsIlNlYXJjaEJhciIsInByb3BzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsInJlbmRlckNvbnRlbnQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DbG9zZUNsaWNrIiwiaW5wdXRDbGFzc05hbWUiLCJzZWFyY2hQbGFjZUhvbGRlciIsInZhbHVlIiwiZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20iLCJ0b29sdGlwIiwidG9vbHRpcERlbGF5IiwiYWxsb3dFbXB0eVNlYXJjaCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm9uU2VhcmNoIiwib25EeW5hbWljU2VhcmNoIiwiZSIsInRhcmdldCIsImxlbmd0aCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwia2V5Q29kZSIsImR5bmFtaWMiLCJjbG9zZSIsImJzQ2xhc3MiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ0eXBlIiwiZ2V0SWNvbiIsImdldFRvb2x0aXAiLCJyZW5kZXJTZWFyY2hCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUNFQyxNQURGLEVBRUVDLFVBRkYsRUFHRUMsV0FIRixFQUlFQyxjQUpGLEVBS0VDLE9BTEYsUUFNTyxpQkFOUDtBQU9BLE9BQU9DLFFBQVAsTUFBcUIsMkJBQXJCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7O0FBRUEsT0FBTyw0QkFBUDs7SUFFcUJDLFM7OztBQXlCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFB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LHVCQUFYLElBQXNDLENBQUMsT0FBS1gsS0FBTCxDQUFXWSxPQUFsRCxHQUNkLHdEQURjLEdBRWQsT0FBS1osS0FBTCxDQUFXWSxPQUZiO0FBR0EsV0FDRUEsVUFDRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsV0FBVSxRQUExQixFQUFtQyxTQUFTLE9BQUtxQixVQUFMLENBQWdCckIsT0FBaEIsQ0FBNUMsRUFBc0UsT0FBTyxPQUFLWixLQUFMLENBQVdhLFlBQXhGO0FBQ0csYUFBS3FCLGVBQUw7QUFESCxLQURGLEdBSUUsT0FBS0EsZUFBTCxFQUxKO0FBT0QsRzs7U0FqSWtCbkMsUyIsImZpbGUiOiJzZWFyY2hiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBGYVNlYXJjaCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc2VhcmNoJztcbmltcG9ydCBGYUNsb3NlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jbG9zZSc7XG5cbmltcG9ydCAnLi9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3NlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlYXJjaFBsYWNlSG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgdG9vbHRpcERlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGFsbG93RW1wdHlTZWFyY2g6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsb3NlQ2xpY2s6ICgpID0+IHtcbiAgICB9LFxuICAgIGlucHV0Q2xhc3NOYW1lOiAnJyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiAwLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIHRvb2x0aXBEZWxheTogMCxcbiAgICBhbGxvd0VtcHR5U2VhcmNoOiBmYWxzZSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZShuZXh0UHJvcHMpKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG5cbiAgb25EeW5hbWljU2VhcmNoID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldC52YWx1ZSB8fCAnJyk7XG4gICAgaWYgKHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPD0gdmFsdWUubGVuZ3RoIHx8ICF2YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKCcnKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDbGljaygpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcbiAgfVxuXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgPSAocHJvcHMgPSB0aGlzLnByb3BzLCB2YWx1ZSA9IHByb3BzLnZhbHVlKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25EeW5hbWljU2VhcmNoIDogdGhpcy5vbkNoYW5nZTtcbiAgICBjb25zdCBkeW5hbWljID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnZHluYW1pYy1zZWFyY2ggJyA6ICcnO1xuICAgIGNvbnN0IGNsb3NlID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAnYnRuLWNsb3NlICcgOiAnJztcbiAgICBjb25zdCBic0NsYXNzID0gYCR7ZHluYW1pY30ke2Nsb3NlfWJ0bmA7XG4gICAgY29uc3Qgb25DbGljayA9ICh2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSkgPyB0aGlzLm9uQ2xvc2VDbGljayA6IHRoaXMub25TZWFyY2g7XG4gICAgY29uc3Qgb25LZXlEb3duID0gIXByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbktleURvd24gOiAoKSA9PiB7XG4gICAgfTtcbiAgICBjb25zdCBkaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICBjb25zdCB0eXBlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAndGV4dCcgOiAnc2VhcmNoJztcbiAgICByZXR1cm4ge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbktleURvd24sXG4gICAgICBic0NsYXNzLFxuICAgICAgb25DbGljayxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB0eXBlLFxuICAgIH07XG4gIH1cblxuICBnZXRJY29uID0gKCkgPT4gKFxuICAgIHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IDxGYUNsb3NlIC8+IDogPEZhU2VhcmNoIC8+XG4gIClcblxuICBnZXRUb29sdGlwID0gdG9vbHRpcCA9PiAoXG4gICAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+XG4gICAgICB7dG9vbHRpcH1cbiAgICA8L1Rvb2x0aXA+XG4gIClcblxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiAoXG4gICAgPElucHV0R3JvdXA+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaW5wdXRDbGFzc05hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnN0YXRlLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMuc3RhdGUub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZUhvbGRlcn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYnNDbGFzcz17dGhpcy5zdGF0ZS5ic0NsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUub25DbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17IXRoaXMucHJvcHMuYWxsb3dFbXB0eVNlYXJjaCAmJiB0aGlzLnN0YXRlLmRpc2FibGVkfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuZ2V0SWNvbigpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSW5wdXRHcm91cC5CdXR0b24+XG4gICAgPC9JbnB1dEdyb3VwPlxuICApXG5cbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0b29sdGlwID0gdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSAmJiAhdGhpcy5wcm9wcy50b29sdGlwID9cbiAgICAgICdTZWFyY2ggc3RhcnRzIHdoZW4geW91IGhhdmUgZW50ZXJlZCBlbm91Z2ggY2hhcmFjdGVycy4nIDpcbiAgICAgIHRoaXMucHJvcHMudG9vbHRpcDtcbiAgICByZXR1cm4gKFxuICAgICAgdG9vbHRpcCA/XG4gICAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXt0aGlzLmdldFRvb2x0aXAodG9vbHRpcCl9IGRlbGF5PXt0aGlzLnByb3BzLnRvb2x0aXBEZWxheX0+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2VhcmNoQmFyKCl9XG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+IDpcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hCYXIoKVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VhcmNoLWJhclwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=