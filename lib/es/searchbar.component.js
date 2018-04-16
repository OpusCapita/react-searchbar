var _class, _temp, _initialiseProps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button, InputGroup, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
    return _this2.state.value && _this2.props.dynamicSearchStartsFrom ? React.createElement('i', { className: 'fa fa-times' }) : React.createElement('i', { className: 'fa fa-search' });
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
            disabled: _this2.state.disabled
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIlNlYXJjaEJhciIsInByb3BzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsInJlbmRlckNvbnRlbnQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DbG9zZUNsaWNrIiwiaW5wdXRDbGFzc05hbWUiLCJzZWFyY2hQbGFjZUhvbGRlciIsInZhbHVlIiwiZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20iLCJ0b29sdGlwIiwidG9vbHRpcERlbGF5IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwib25TZWFyY2giLCJvbkR5bmFtaWNTZWFyY2giLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJrZXlDb2RlIiwiZHluYW1pYyIsImNsb3NlIiwiYnNDbGFzcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInR5cGUiLCJnZXRJY29uIiwiZ2V0VG9vbHRpcCIsInJlbmRlclNlYXJjaEJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQ0VDLE1BREYsRUFFRUMsVUFGRixFQUdFQyxXQUhGLEVBSUVDLGNBSkYsRUFLRUMsT0FMRixRQU1PLGlCQU5QO0FBT0EsT0FBTyw0QkFBUDs7SUFFcUJDLFM7OztBQXNCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxNQUFLQyxRQUFMLEVBQWI7QUFGaUI7QUFHbEI7O3NCQXNHREMsTSxxQkFB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TCxDQUFnQnBCLE9BQWhCLENBQTVDLEVBQXNFLE9BQU8sT0FBS1osS0FBTCxDQUFXYSxZQUF4RjtBQUNHLGFBQUtvQixlQUFMO0FBREgsS0FERixHQUlFLE9BQUtBLGVBQUwsRUFMSjtBQU9ELEc7O1NBN0hrQmxDLFMiLCJmaWxlIjoic2VhcmNoYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgT3ZlcmxheVRyaWdnZXIsXG4gIFRvb2x0aXAsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgJy4vc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbG9zZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIHRvb2x0aXBEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbG9zZUNsaWNrOiAoKSA9PiB7fSxcbiAgICBpbnB1dENsYXNzTmFtZTogJycsXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbTogMCxcbiAgICB0b29sdGlwOiAnJyxcbiAgICB0b29sdGlwRGVsYXk6IDAsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcbiAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUobmV4dFByb3BzKSk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2ggPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaCh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfVxuXG4gIG9uRHluYW1pY1NlYXJjaCA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpO1xuICAgIGlmICh0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIDw9IHZhbHVlLmxlbmd0aCB8fCAhdmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWFyY2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaCgnJyk7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ2xpY2soKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldC52YWx1ZSB8fCAnJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKHRoaXMucHJvcHMsIHZhbHVlKSk7XG4gIH1cblxuICBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5vblNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlID0gKHByb3BzID0gdGhpcy5wcm9wcywgdmFsdWUgPSBwcm9wcy52YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uRHluYW1pY1NlYXJjaCA6IHRoaXMub25DaGFuZ2U7XG4gICAgY29uc3QgZHluYW1pYyA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ2R5bmFtaWMtc2VhcmNoICcgOiAnJztcbiAgICBjb25zdCBjbG9zZSA9IHZhbHVlICYmIHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ2J0bi1jbG9zZSAnIDogJyc7XG4gICAgY29uc3QgYnNDbGFzcyA9IGAke2R5bmFtaWN9JHtjbG9zZX1idG5gO1xuICAgIGNvbnN0IG9uQ2xpY2sgPSB2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25DbG9zZUNsaWNrIDogdGhpcy5vblNlYXJjaDtcbiAgICBjb25zdCBvbktleURvd24gPSAhcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uS2V5RG93biA6ICgpID0+IHt9O1xuICAgIGNvbnN0IGRpc2FibGVkID0gIXZhbHVlO1xuICAgIGNvbnN0IHR5cGUgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICd0ZXh0JyA6ICdzZWFyY2gnO1xuICAgIHJldHVybiB7XG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uS2V5RG93bixcbiAgICAgIGJzQ2xhc3MsXG4gICAgICBvbkNsaWNrLFxuICAgICAgdmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIGdldEljb24gPSAoKSA9PiAoXG4gICAgdGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiAvPiA6IDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIC8+XG4gIClcblxuICBnZXRUb29sdGlwID0gdG9vbHRpcCA9PiAoXG4gICAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+XG4gICAgICB7dG9vbHRpcH1cbiAgICA8L1Rvb2x0aXA+XG4gIClcblxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiAoXG4gICAgPElucHV0R3JvdXA+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaW5wdXRDbGFzc05hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnN0YXRlLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMuc3RhdGUub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZUhvbGRlcn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYnNDbGFzcz17dGhpcy5zdGF0ZS5ic0NsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUub25DbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLmdldEljb24oKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgIDwvSW5wdXRHcm91cD5cbiAgKVxuXG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gJiYgIXRoaXMucHJvcHMudG9vbHRpcCA/XG4gICAgICAnU2VhcmNoIHN0YXJ0cyB3aGVuIHlvdSBoYXZlIGVudGVyZWQgZW5vdWdoIGNoYXJhY3RlcnMuJyA6XG4gICAgICB0aGlzLnByb3BzLnRvb2x0aXA7XG4gICAgcmV0dXJuIChcbiAgICAgIHRvb2x0aXAgP1xuICAgICAgICA8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgb3ZlcmxheT17dGhpcy5nZXRUb29sdGlwKHRvb2x0aXApfSBkZWxheT17dGhpcy5wcm9wcy50b29sdGlwRGVsYXl9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiA6XG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoQmFyKClcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlYXJjaC1iYXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19