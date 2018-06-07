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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkZhU2VhcmNoIiwiRmFDbG9zZSIsIlNlYXJjaEJhciIsInByb3BzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsInJlbmRlckNvbnRlbnQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DbG9zZUNsaWNrIiwiaW5wdXRDbGFzc05hbWUiLCJzZWFyY2hQbGFjZUhvbGRlciIsInZhbHVlIiwiZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20iLCJ0b29sdGlwIiwidG9vbHRpcERlbGF5IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwib25TZWFyY2giLCJvbkR5bmFtaWNTZWFyY2giLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJrZXlDb2RlIiwiZHluYW1pYyIsImNsb3NlIiwiYnNDbGFzcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInR5cGUiLCJnZXRJY29uIiwiZ2V0VG9vbHRpcCIsInJlbmRlclNlYXJjaEJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQ0VDLE1BREYsRUFFRUMsVUFGRixFQUdFQyxXQUhGLEVBSUVDLGNBSkYsRUFLRUMsT0FMRixRQU1PLGlCQU5QO0FBT0EsT0FBT0MsUUFBUCxNQUFxQiwyQkFBckI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjs7QUFFQSxPQUFPLDRCQUFQOztJQUVxQkMsUzs7O0FBc0JuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FB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QUFHQSxXQUNFQSxVQUNFO0FBQUMsb0JBQUQ7QUFBQSxRQUFnQixXQUFVLFFBQTFCLEVBQW1DLFNBQVMsT0FBS29CLFVBQUwsQ0FBZ0JwQixPQUFoQixDQUE1QyxFQUFzRSxPQUFPLE9BQUtaLEtBQUwsQ0FBV2EsWUFBeEY7QUFDRyxhQUFLb0IsZUFBTDtBQURILEtBREYsR0FJRSxPQUFLQSxlQUFMLEVBTEo7QUFPRCxHOztTQTdIa0JsQyxTIiwiZmlsZSI6InNlYXJjaGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBJbnB1dEdyb3VwLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIE92ZXJsYXlUcmlnZ2VyLFxyXG4gIFRvb2x0aXAsXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEZhU2VhcmNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9zZWFyY2gnO1xyXG5pbXBvcnQgRmFDbG9zZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2xvc2UnO1xyXG5cclxuaW1wb3J0ICcuL3NlYXJjaGJhci5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsb3NlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgdG9vbHRpcERlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9uQ2xvc2VDbGljazogKCkgPT4ge30sXHJcbiAgICBpbnB1dENsYXNzTmFtZTogJycsXHJcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogJ1NlYXJjaC4uLicsXHJcbiAgICB2YWx1ZTogJycsXHJcbiAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbTogMCxcclxuICAgIHRvb2x0aXA6ICcnLFxyXG4gICAgdG9vbHRpcERlbGF5OiAwLFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xyXG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUobmV4dFByb3BzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaCA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZWFyY2godGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkR5bmFtaWNTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPD0gdmFsdWUubGVuZ3RoIHx8ICF2YWx1ZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbG9zZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaCgnJyk7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDbGljaygpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKHRoaXMucHJvcHMsIHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIHRoaXMub25TZWFyY2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0YXRlID0gKHByb3BzID0gdGhpcy5wcm9wcywgdmFsdWUgPSBwcm9wcy52YWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IHRoaXMub25EeW5hbWljU2VhcmNoIDogdGhpcy5vbkNoYW5nZTtcclxuICAgIGNvbnN0IGR5bmFtaWMgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdkeW5hbWljLXNlYXJjaCAnIDogJyc7XHJcbiAgICBjb25zdCBjbG9zZSA9IHZhbHVlICYmIHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gJ2J0bi1jbG9zZSAnIDogJyc7XHJcbiAgICBjb25zdCBic0NsYXNzID0gYCR7ZHluYW1pY30ke2Nsb3NlfWJ0bmA7XHJcbiAgICBjb25zdCBvbkNsaWNrID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uQ2xvc2VDbGljayA6IHRoaXMub25TZWFyY2g7XHJcbiAgICBjb25zdCBvbktleURvd24gPSAhcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uS2V5RG93biA6ICgpID0+IHt9O1xyXG4gICAgY29uc3QgZGlzYWJsZWQgPSAhdmFsdWU7XHJcbiAgICBjb25zdCB0eXBlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAndGV4dCcgOiAnc2VhcmNoJztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICBvbktleURvd24sXHJcbiAgICAgIGJzQ2xhc3MsXHJcbiAgICAgIG9uQ2xpY2ssXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgdHlwZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRJY29uID0gKCkgPT4gKFxyXG4gICAgdGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gPEZhQ2xvc2UgLz4gOiA8RmFTZWFyY2ggLz5cclxuICApXHJcblxyXG4gIGdldFRvb2x0aXAgPSB0b29sdGlwID0+IChcclxuICAgIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPlxyXG4gICAgICB7dG9vbHRpcH1cclxuICAgIDwvVG9vbHRpcD5cclxuICApXHJcblxyXG4gIHJlbmRlclNlYXJjaEJhciA9ICgpID0+IChcclxuICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnR5cGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnN0YXRlLm9uQ2hhbmdlfVxyXG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5zdGF0ZS5vbktleURvd259XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2VIb2xkZXJ9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dEdyb3VwLkJ1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBic0NsYXNzPXt0aGlzLnN0YXRlLmJzQ2xhc3N9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5nZXRJY29uKCl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvSW5wdXRHcm91cC5CdXR0b24+XHJcbiAgICA8L0lucHV0R3JvdXA+XHJcbiAgKVxyXG5cclxuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9vbHRpcCA9IHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gJiYgIXRoaXMucHJvcHMudG9vbHRpcCA/XHJcbiAgICAgICdTZWFyY2ggc3RhcnRzIHdoZW4geW91IGhhdmUgZW50ZXJlZCBlbm91Z2ggY2hhcmFjdGVycy4nIDpcclxuICAgICAgdGhpcy5wcm9wcy50b29sdGlwO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdG9vbHRpcCA/XHJcbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9e3RoaXMuZ2V0VG9vbHRpcCh0b29sdGlwKX0gZGVsYXk9e3RoaXMucHJvcHMudG9vbHRpcERlbGF5fT5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxyXG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+IDpcclxuICAgICAgICB0aGlzLnJlbmRlclNlYXJjaEJhcigpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWFyY2gtYmFyXCI+XHJcbiAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==