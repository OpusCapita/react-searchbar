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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIlNlYXJjaEJhciIsInByb3BzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsInJlbmRlckNvbnRlbnQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DbG9zZUNsaWNrIiwiaW5wdXRDbGFzc05hbWUiLCJzZWFyY2hQbGFjZUhvbGRlciIsInZhbHVlIiwiZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20iLCJ0b29sdGlwIiwidG9vbHRpcERlbGF5IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwib25TZWFyY2giLCJvbkR5bmFtaWNTZWFyY2giLCJlIiwidGFyZ2V0IiwidHJpbSIsImxlbmd0aCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwia2V5Q29kZSIsImR5bmFtaWMiLCJjbG9zZSIsImJzQ2xhc3MiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ0eXBlIiwiZ2V0SWNvbiIsImdldFRvb2x0aXAiLCJyZW5kZXJTZWFyY2hCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUNFQyxNQURGLEVBRUVDLFVBRkYsRUFHRUMsV0FIRixFQUlFQyxjQUpGLEVBS0VDLE9BTEYsUUFNTyxpQkFOUDtBQU9BLE9BQU8sNEJBQVA7O0lBRXFCQyxTOzs7QUFzQm5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsTUFBS0MsUUFBTCxFQUFiO0FBRmlCO0FBR2xCOztzQkFzR0RD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RTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsV0FBVSxRQUExQixFQUFtQyxTQUFTLE9BQUtxQixVQUFMLENBQWdCckIsT0FBaEIsQ0FBNUMsRUFBc0UsT0FBTyxPQUFLWixLQUFMLENBQVdhLFlBQXhGO0FBQ0csYUFBS3FCLGVBQUw7QUFESCxLQURGLEdBSUUsT0FBS0EsZUFBTCxFQUxKO0FBT0QsRzs7U0E3SGtCbkMsUyIsImZpbGUiOiJzZWFyY2hiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIElucHV0R3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBPdmVybGF5VHJpZ2dlcixcbiAgVG9vbHRpcCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAnLi9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3NlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlYXJjaFBsYWNlSG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgdG9vbHRpcERlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsb3NlQ2xpY2s6ICgpID0+IHt9LFxuICAgIGlucHV0Q2xhc3NOYW1lOiAnJyxcbiAgICBzZWFyY2hQbGFjZUhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tOiAwLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIHRvb2x0aXBEZWxheTogMCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZShuZXh0UHJvcHMpKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG5cbiAgb25EeW5hbWljU2VhcmNoID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldC52YWx1ZSB8fCAnJykudHJpbSgpO1xuICAgIGlmICh0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIDw9IHZhbHVlLmxlbmd0aCB8fCAhdmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWFyY2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGUodGhpcy5wcm9wcywgdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaCgnJyk7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ2xpY2soKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldC52YWx1ZSB8fCAnJykudHJpbSgpO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMub25TZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSA9IChwcm9wcyA9IHRoaXMucHJvcHMsIHZhbHVlID0gcHJvcHMudmFsdWUpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbkR5bmFtaWNTZWFyY2ggOiB0aGlzLm9uQ2hhbmdlO1xuICAgIGNvbnN0IGR5bmFtaWMgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdkeW5hbWljLXNlYXJjaCAnIDogJyc7XG4gICAgY29uc3QgY2xvc2UgPSB2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdidG4tY2xvc2UgJyA6ICcnO1xuICAgIGNvbnN0IGJzQ2xhc3MgPSBgJHtkeW5hbWljfSR7Y2xvc2V9YnRuYDtcbiAgICBjb25zdCBvbkNsaWNrID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uQ2xvc2VDbGljayA6IHRoaXMub25TZWFyY2g7XG4gICAgY29uc3Qgb25LZXlEb3duID0gIXByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbktleURvd24gOiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICBjb25zdCB0eXBlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAndGV4dCcgOiAnc2VhcmNoJztcbiAgICByZXR1cm4ge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbktleURvd24sXG4gICAgICBic0NsYXNzLFxuICAgICAgb25DbGljayxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB0eXBlLFxuICAgIH07XG4gIH1cblxuICBnZXRJY29uID0gKCkgPT4gKFxuICAgIHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgLz4gOiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiAvPlxuICApXG5cbiAgZ2V0VG9vbHRpcCA9IHRvb2x0aXAgPT4gKFxuICAgIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPlxuICAgICAge3Rvb2x0aXB9XG4gICAgPC9Ub29sdGlwPlxuICApXG5cbiAgcmVuZGVyU2VhcmNoQmFyID0gKCkgPT4gKFxuICAgIDxJbnB1dEdyb3VwPlxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIHR5cGU9e3RoaXMuc3RhdGUudHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zdGF0ZS5vbkNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLnN0YXRlLm9uS2V5RG93bn1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2VIb2xkZXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJzQ2xhc3M9e3RoaXMuc3RhdGUuYnNDbGFzc31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5nZXRJY29uKCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9JbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICA8L0lucHV0R3JvdXA+XG4gIClcblxuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tICYmICF0aGlzLnByb3BzLnRvb2x0aXAgP1xuICAgICAgJ1NlYXJjaCBzdGFydHMgd2hlbiB5b3UgaGF2ZSBlbnRlcmVkIGVub3VnaCBjaGFyYWN0ZXJzLicgOlxuICAgICAgdGhpcy5wcm9wcy50b29sdGlwO1xuICAgIHJldHVybiAoXG4gICAgICB0b29sdGlwID9cbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9e3RoaXMuZ2V0VG9vbHRpcCh0b29sdGlwKX0gZGVsYXk9e3RoaXMucHJvcHMudG9vbHRpcERlbGF5fT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWFyY2hCYXIoKX1cbiAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj4gOlxuICAgICAgICB0aGlzLnJlbmRlclNlYXJjaEJhcigpXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWFyY2gtYmFyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==