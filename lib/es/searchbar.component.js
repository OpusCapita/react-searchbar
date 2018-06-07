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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkZhU2VhcmNoIiwiRmFDbG9zZSIsIlNlYXJjaEJhciIsInByb3BzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsInJlbmRlckNvbnRlbnQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DbG9zZUNsaWNrIiwiaW5wdXRDbGFzc05hbWUiLCJzZWFyY2hQbGFjZUhvbGRlciIsInZhbHVlIiwiZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20iLCJ0b29sdGlwIiwidG9vbHRpcERlbGF5IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwib25TZWFyY2giLCJvbkR5bmFtaWNTZWFyY2giLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJrZXlDb2RlIiwiZHluYW1pYyIsImNsb3NlIiwiYnNDbGFzcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInR5cGUiLCJnZXRJY29uIiwiZ2V0VG9vbHRpcCIsInJlbmRlclNlYXJjaEJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQ0VDLE1BREYsRUFFRUMsVUFGRixFQUdFQyxXQUhGLEVBSUVDLGNBSkYsRUFLRUMsT0FMRixRQU1PLGlCQU5QO0FBT0EsT0FBT0MsUUFBUCxNQUFxQiwyQkFBckI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjs7QUFFQSxPQUFPLDRCQUFQOztJQUVxQkMsUzs7O0FBc0JuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FB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QUFHQSxXQUNFQSxVQUNFO0FBQUMsb0JBQUQ7QUFBQSxRQUFnQixXQUFVLFFBQTFCLEVBQW1DLFNBQVMsT0FBS29CLFVBQUwsQ0FBZ0JwQixPQUFoQixDQUE1QyxFQUFzRSxPQUFPLE9BQUtaLEtBQUwsQ0FBV2EsWUFBeEY7QUFDRyxhQUFLb0IsZUFBTDtBQURILEtBREYsR0FJRSxPQUFLQSxlQUFMLEVBTEo7QUFPRCxHOztTQTdIa0JsQyxTIiwiZmlsZSI6InNlYXJjaGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSW5wdXRHcm91cCxcbiAgRm9ybUNvbnRyb2wsXG4gIE92ZXJsYXlUcmlnZ2VyLFxuICBUb29sdGlwLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEZhU2VhcmNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9zZWFyY2gnO1xuaW1wb3J0IEZhQ2xvc2UgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2Nsb3NlJztcblxuaW1wb3J0ICcuL3NlYXJjaGJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2xvc2VDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB0b29sdGlwRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xvc2VDbGljazogKCkgPT4ge30sXG4gICAgaW5wdXRDbGFzc05hbWU6ICcnLFxuICAgIHNlYXJjaFBsYWNlSG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICB2YWx1ZTogJycsXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IDAsXG4gICAgdG9vbHRpcDogJycsXG4gICAgdG9vbHRpcERlbGF5OiAwLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKG5leHRQcm9wcykpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2godGhpcy5zdGF0ZS52YWx1ZSk7XG4gIH1cblxuICBvbkR5bmFtaWNTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA8PSB2YWx1ZS5sZW5ndGggfHwgIXZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKHRoaXMucHJvcHMsIHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xuICAgIHRoaXMucHJvcHMub25DbG9zZUNsaWNrKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMub25TZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSA9IChwcm9wcyA9IHRoaXMucHJvcHMsIHZhbHVlID0gcHJvcHMudmFsdWUpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbkR5bmFtaWNTZWFyY2ggOiB0aGlzLm9uQ2hhbmdlO1xuICAgIGNvbnN0IGR5bmFtaWMgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdkeW5hbWljLXNlYXJjaCAnIDogJyc7XG4gICAgY29uc3QgY2xvc2UgPSB2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdidG4tY2xvc2UgJyA6ICcnO1xuICAgIGNvbnN0IGJzQ2xhc3MgPSBgJHtkeW5hbWljfSR7Y2xvc2V9YnRuYDtcbiAgICBjb25zdCBvbkNsaWNrID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uQ2xvc2VDbGljayA6IHRoaXMub25TZWFyY2g7XG4gICAgY29uc3Qgb25LZXlEb3duID0gIXByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbktleURvd24gOiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICBjb25zdCB0eXBlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAndGV4dCcgOiAnc2VhcmNoJztcbiAgICByZXR1cm4ge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbktleURvd24sXG4gICAgICBic0NsYXNzLFxuICAgICAgb25DbGljayxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB0eXBlLFxuICAgIH07XG4gIH1cblxuICBnZXRJY29uID0gKCkgPT4gKFxuICAgIHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IDxGYUNsb3NlIC8+IDogPEZhU2VhcmNoIC8+XG4gIClcblxuICBnZXRUb29sdGlwID0gdG9vbHRpcCA9PiAoXG4gICAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+XG4gICAgICB7dG9vbHRpcH1cbiAgICA8L1Rvb2x0aXA+XG4gIClcblxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiAoXG4gICAgPElucHV0R3JvdXA+XG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaW5wdXRDbGFzc05hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnN0YXRlLm9uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMuc3RhdGUub25LZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZUhvbGRlcn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYnNDbGFzcz17dGhpcy5zdGF0ZS5ic0NsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUub25DbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLmdldEljb24oKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgIDwvSW5wdXRHcm91cD5cbiAgKVxuXG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHRoaXMucHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gJiYgIXRoaXMucHJvcHMudG9vbHRpcCA/XG4gICAgICAnU2VhcmNoIHN0YXJ0cyB3aGVuIHlvdSBoYXZlIGVudGVyZWQgZW5vdWdoIGNoYXJhY3RlcnMuJyA6XG4gICAgICB0aGlzLnByb3BzLnRvb2x0aXA7XG4gICAgcmV0dXJuIChcbiAgICAgIHRvb2x0aXAgP1xuICAgICAgICA8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgb3ZlcmxheT17dGhpcy5nZXRUb29sdGlwKHRvb2x0aXApfSBkZWxheT17dGhpcy5wcm9wcy50b29sdGlwRGVsYXl9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiA6XG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoQmFyKClcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlYXJjaC1iYXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19