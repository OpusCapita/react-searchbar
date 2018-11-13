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
      { id: this.props.id + '-container', className: 'oc-search-bar' },
      this.renderContent()
    );
  };

  return SearchBar;
}(React.PureComponent), _class.defaultProps = {
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
        id: _this2.props.id + '-input',
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
    return tooltip ? React.createElement(
      OverlayTrigger,
      {
        placement: 'bottom',
        overlay: _this2.getTooltip(tooltip),
        delay: _this2.props.tooltipDelay
      },
      _this2.renderSearchBar()
    ) : _this2.renderSearchBar();
  };
}, _temp);
export { SearchBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkZhU2VhcmNoIiwiRmFDbG9zZSIsIlNlYXJjaEJhciIsInByb3BzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsImlkIiwicmVuZGVyQ29udGVudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNsb3NlQ2xpY2siLCJpbnB1dENsYXNzTmFtZSIsInNlYXJjaFBsYWNlSG9sZGVyIiwidmFsdWUiLCJkeW5hbWljU2VhcmNoU3RhcnRzRnJvbSIsInRvb2x0aXAiLCJ0b29sdGlwRGVsYXkiLCJhbGxvd0VtcHR5U2VhcmNoIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwib25TZWFyY2giLCJvbkR5bmFtaWNTZWFyY2giLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJrZXlDb2RlIiwiZHluYW1pYyIsImNsb3NlIiwiYnNDbGFzcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInR5cGUiLCJnZXRJY29uIiwiZ2V0VG9vbHRpcCIsInJlbmRlclNlYXJjaEJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQ0VDLE1BREYsRUFFRUMsVUFGRixFQUdFQyxXQUhGLEVBSUVDLGNBSkYsRUFLRUMsT0FMRixRQU1PLGlCQU5QO0FBT0EsT0FBT0MsUUFBUCxNQUFxQiwyQkFBckI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjs7QUFFQSxPQUFPLDRCQUFQOztJQUVxQkMsUzs7O0FBMkJuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFB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TCxDQUFXZSxnQkFBWixJQUFnQyxPQUFLZCxLQUFMLENBQVc4QjtBQUp2RDtBQU1HLGlCQUFLRSxPQUFMO0FBTkg7QUFERjtBQVZGLEtBRGdCO0FBQUEsRzs7T0F3QmxCNUIsYSxHQUFnQixZQUFNO0FBQ3BCLFFBQU1RLFVBQVUsT0FBS2IsS0FBTCxDQUFXWSx1QkFBWCxJQUFzQyxDQUFDLE9BQUtaLEtBQUwsQ0FBV2EsT0FBbEQsR0FDZCx3REFEYyxHQUVkLE9BQUtiLEtBQUwsQ0FBV2EsT0FGYjtBQUdBLFdBQ0VBLFVBQ0U7QUFBQyxvQkFBRDtBQUFBO0FBQ0UsbUJBQVUsUUFEWjtBQUVFLGlCQUFTLE9BQUtxQixVQUFMLENBQWdCckIsT0FBaEIsQ0FGWDtBQUdFLGVBQU8sT0FBS2IsS0FBTCxDQUFXYztBQUhwQjtBQUtHLGFBQUtxQixlQUFMO0FBTEgsS0FERixHQVFFLE9BQUtBLGVBQUwsRUFUSjtBQVdELEc7O1NBeklrQnBDLFMiLCJmaWxlIjoic2VhcmNoYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgT3ZlcmxheVRyaWdnZXIsXG4gIFRvb2x0aXAsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgRmFTZWFyY2ggZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3NlYXJjaCc7XG5pbXBvcnQgRmFDbG9zZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2xvc2UnO1xuXG5pbXBvcnQgJy4vc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbG9zZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIHRvb2x0aXBEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBhbGxvd0VtcHR5U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICdvYy1yZWFjdC1zZWFyY2hiYXInLFxuICAgIG9uQ2xvc2VDbGljazogKCkgPT4ge1xuICAgIH0sXG4gICAgaW5wdXRDbGFzc05hbWU6ICcnLFxuICAgIHNlYXJjaFBsYWNlSG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICB2YWx1ZTogJycsXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IDAsXG4gICAgdG9vbHRpcDogJycsXG4gICAgdG9vbHRpcERlbGF5OiAwLFxuICAgIGFsbG93RW1wdHlTZWFyY2g6IGZhbHNlLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKG5leHRQcm9wcykpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2godGhpcy5zdGF0ZS52YWx1ZSk7XG4gIH1cblxuICBvbkR5bmFtaWNTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA8PSB2YWx1ZS5sZW5ndGggfHwgIXZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKHRoaXMucHJvcHMsIHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xuICAgIHRoaXMucHJvcHMub25DbG9zZUNsaWNrKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMub25TZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSA9IChwcm9wcyA9IHRoaXMucHJvcHMsIHZhbHVlID0gcHJvcHMudmFsdWUpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbkR5bmFtaWNTZWFyY2ggOiB0aGlzLm9uQ2hhbmdlO1xuICAgIGNvbnN0IGR5bmFtaWMgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdkeW5hbWljLXNlYXJjaCAnIDogJyc7XG4gICAgY29uc3QgY2xvc2UgPSB2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdidG4tY2xvc2UgJyA6ICcnO1xuICAgIGNvbnN0IGJzQ2xhc3MgPSBgJHtkeW5hbWljfSR7Y2xvc2V9YnRuYDtcbiAgICBjb25zdCBvbkNsaWNrID0gKHZhbHVlICYmIHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tKSA/IHRoaXMub25DbG9zZUNsaWNrIDogdGhpcy5vblNlYXJjaDtcbiAgICBjb25zdCBvbktleURvd24gPSAhcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uS2V5RG93biA6ICgpID0+IHtcbiAgICB9O1xuICAgIGNvbnN0IGRpc2FibGVkID0gIXZhbHVlO1xuICAgIGNvbnN0IHR5cGUgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICd0ZXh0JyA6ICdzZWFyY2gnO1xuICAgIHJldHVybiB7XG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uS2V5RG93bixcbiAgICAgIGJzQ2xhc3MsXG4gICAgICBvbkNsaWNrLFxuICAgICAgdmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIGdldEljb24gPSAoKSA9PiAoXG4gICAgdGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gPEZhQ2xvc2UgLz4gOiA8RmFTZWFyY2ggLz5cbiAgKVxuXG4gIGdldFRvb2x0aXAgPSB0b29sdGlwID0+IChcbiAgICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIj5cbiAgICAgIHt0b29sdGlwfVxuICAgIDwvVG9vbHRpcD5cbiAgKVxuXG4gIHJlbmRlclNlYXJjaEJhciA9ICgpID0+IChcbiAgICA8SW5wdXRHcm91cD5cbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICBpZD17YCR7dGhpcy5wcm9wcy5pZH0taW5wdXRgfVxuICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnR5cGV9XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuc3RhdGUub25DaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5zdGF0ZS5vbktleURvd259XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlSG9sZGVyfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpZD17YCR7dGhpcy5wcm9wcy5pZH0tYnV0dG9uYH1cbiAgICAgICAgICBic0NsYXNzPXt0aGlzLnN0YXRlLmJzQ2xhc3N9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5vbkNsaWNrfVxuICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5hbGxvd0VtcHR5U2VhcmNoICYmIHRoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5nZXRJY29uKCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9JbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICA8L0lucHV0R3JvdXA+XG4gIClcblxuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tICYmICF0aGlzLnByb3BzLnRvb2x0aXAgP1xuICAgICAgJ1NlYXJjaCBzdGFydHMgd2hlbiB5b3UgaGF2ZSBlbnRlcmVkIGVub3VnaCBjaGFyYWN0ZXJzLicgOlxuICAgICAgdGhpcy5wcm9wcy50b29sdGlwO1xuICAgIHJldHVybiAoXG4gICAgICB0b29sdGlwID9cbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICBvdmVybGF5PXt0aGlzLmdldFRvb2x0aXAodG9vbHRpcCl9XG4gICAgICAgICAgZGVsYXk9e3RoaXMucHJvcHMudG9vbHRpcERlbGF5fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2VhcmNoQmFyKCl9XG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+IDpcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hCYXIoKVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e2Ake3RoaXMucHJvcHMuaWR9LWNvbnRhaW5lcmB9IGNsYXNzTmFtZT1cIm9jLXNlYXJjaC1iYXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19