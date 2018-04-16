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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hiYXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJyZW5kZXJDb250ZW50IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2xvc2VDbGljayIsImlucHV0Q2xhc3NOYW1lIiwic2VhcmNoUGxhY2VIb2xkZXIiLCJ2YWx1ZSIsImR5bmFtaWNTZWFyY2hTdGFydHNGcm9tIiwidG9vbHRpcCIsInRvb2x0aXBEZWxheSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm9uU2VhcmNoIiwib25EeW5hbWljU2VhcmNoIiwiZSIsInRhcmdldCIsImxlbmd0aCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwia2V5Q29kZSIsImR5bmFtaWMiLCJjbG9zZSIsImJzQ2xhc3MiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ0eXBlIiwiZ2V0SWNvbiIsImdldFRvb2x0aXAiLCJyZW5kZXJTZWFyY2hCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQXNCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxNQUFLQyxRQUFMLEVBQWI7QUFGaUI7QUFHbEI7O3NCQXNHREMsTSxxQkFBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxlQUFmO0FBQ0csV0FBS0MsYUFBTDtBQURILEtBREY7QUFLRCxHOzs7RUFySW9DLGdCQUFNQyxhLFVBWXBDQyxZLEdBQWU7QUFDcEJDLGdCQUFjLHdCQUFNLENBQUUsQ0FERjtBQUVwQkMsa0JBQWdCLEVBRkk7QUFHcEJDLHFCQUFtQixXQUhDO0FBSXBCQyxTQUFPLEVBSmE7QUFLcEJDLDJCQUF5QixDQUxMO0FBTXBCQyxXQUFTLEVBTlc7QUFPcEJDLGdCQUFjO0FBUE0sQzs7O09BZXRCQyx5QixHQUE0QixVQUFDQyxTQUFELEVBQWU7QUFDekMsUUFBSUEsVUFBVUwsS0FBVixLQUFvQixPQUFLVixLQUFMLENBQVdVLEtBQW5DLEVBQTBDO0FBQ3hDLGFBQUtNLFFBQUwsQ0FBYyxPQUFLZCxRQUFMLENBQWNhLFNBQWQsQ0FBZDtBQUNEO0FBQ0YsRzs7T0FFREUsUSxHQUFXLFlBQU07QUFDZixXQUFLakIsS0FBTCxDQUFXaUIsUUFBWCxDQUFvQixPQUFLaEIsS0FBTCxDQUFXUyxLQUEvQjtBQUNELEc7O09BRURRLGUsR0FBa0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFFBQU1ULFFBQVNTLEVBQUVDLE1BQUYsQ0FBU1YsS0FBVCxJQUFrQixFQUFqQztBQUNBLFFBQUksT0FBS1YsS0FBTCxDQUFXVyx1QkFBWCxJQUFzQ0QsTUFBTVcsTUFBNUMsSUFBc0QsQ0FBQ1gsS0FBM0QsRUFBa0U7QUFDaEUsYUFBS1YsS0FBTCxDQUFXaUIsUUFBWCxDQUFvQlAsS0FBcEI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFLTSxRQUFMLENBQWMsT0FBS2QsUUFBTCxDQUFjLE9BQUtGLEtBQW5CLEVBQTBCVSxLQUExQixDQUFkO0FBQ0Q7QUFDRixHOztPQUVESCxZLEdBQWUsWUFBTTtBQUNuQixXQUFLUCxLQUFMLENBQVdpQixRQUFYLENBQW9CLEVBQXBCO0FBQ0EsV0FBS2pCLEtBQUwsQ0FBV08sWUFBWDtBQUNELEc7O09BRURlLFEsR0FBVyxVQUFDSCxDQUFELEVBQU87QUFDaEIsUUFBTVQsUUFBU1MsRUFBRUMsTUFBRixDQUFTVixLQUFULElBQWtCLEVBQWpDO0FBQ0EsV0FBS00sUUFBTCxDQUFjLE9BQUtkLFFBQUwsQ0FBYyxPQUFLRixLQUFuQixFQUEwQlUsS0FBMUIsQ0FBZDtBQUNELEc7O09BRURhLFMsR0FBWSxVQUFDSixDQUFELEVBQU87QUFDakIsUUFBSUEsRUFBRUssT0FBRixJQUFhTCxFQUFFSyxPQUFGLEtBQWMsRUFBL0IsRUFBbUM7QUFDakMsYUFBS1AsUUFBTDtBQUNEO0FBQ0YsRzs7T0FFRGYsUSxHQUFXLFlBQTZDO0FBQUEsUUFBNUNGLEtBQTRDLHVFQUFwQyxPQUFLQSxLQUErQjtBQUFBLFFBQXhCVSxLQUF3Qix1RUFBaEJWLE1BQU1VLEtBQVU7O0FBQ3RELFFBQU1ZLFdBQVd0QixNQUFNVyx1QkFBTixHQUFnQyxPQUFLTyxlQUFyQyxHQUF1RCxPQUFLSSxRQUE3RTtBQUNBLFFBQU1HLFVBQVV6QixNQUFNVyx1QkFBTixHQUFnQyxpQkFBaEMsR0FBb0QsRUFBcEU7QUFDQSxRQUFNZSxRQUFRaEIsU0FBU1YsTUFBTVcsdUJBQWYsR0FBeUMsWUFBekMsR0FBd0QsRUFBdEU7QUFDQSxRQUFNZ0IsZUFBYUYsT0FBYixHQUF1QkMsS0FBdkIsUUFBTjtBQUNBLFFBQU1FLFVBQVVsQixTQUFTVixNQUFNVyx1QkFBZixHQUF5QyxPQUFLSixZQUE5QyxHQUE2RCxPQUFLVSxRQUFsRjtBQUNBLFFBQU1NLFlBQVksQ0FBQ3ZCLE1BQU1XLHVCQUFQLEdBQWlDLE9BQUtZLFNBQXRDLEdBQWtELFlBQU0sQ0FBRSxDQUE1RTtBQUNBLFFBQU1NLFdBQVcsQ0FBQ25CLEtBQWxCO0FBQ0EsUUFBTW9CLE9BQU85QixNQUFNVyx1QkFBTixHQUFnQyxNQUFoQyxHQUF5QyxRQUF0RDtBQUNBLFdBQU87QUFDTFcsd0JBREs7QUFFTEMsMEJBRks7QUFHTEksc0JBSEs7QUFJTEMsc0JBSks7QUFLTGxCLGtCQUxLO0FBTUxtQix3QkFOSztBQU9MQztBQVBLLEtBQVA7QUFTRCxHOztPQUVEQyxPLEdBQVU7QUFBQSxXQUNSLE9BQUs5QixLQUFMLENBQVdTLEtBQVgsSUFBb0IsT0FBS1YsS0FBTCxDQUFXVyx1QkFBL0IsR0FBeUQscUNBQUcsV0FBVSxhQUFiLEdBQXpELEdBQXlGLHFDQUFHLFdBQVUsY0FBYixHQURqRjtBQUFBLEc7O09BSVZxQixVLEdBQWE7QUFBQSxXQUNYO0FBQUE7QUFBQSxRQUFTLElBQUcsU0FBWjtBQUNHcEI7QUFESCxLQURXO0FBQUEsRzs7T0FNYnFCLGUsR0FBa0I7QUFBQSxXQUNoQjtBQUFBO0FBQUE7QUFDRTtBQUNFLGNBQU0sT0FBS2hDLEtBQUwsQ0FBVzZCLElBRG5CO0FBRUUsbUJBQVcsT0FBSzlCLEtBQUwsQ0FBV1EsY0FGeEI7QUFHRSxrQkFBVSxPQUFLUCxLQUFMLENBQVdxQixRQUh2QjtBQUlFLG1CQUFXLE9BQUtyQixLQUFMLENBQVdzQixTQUp4QjtBQUtFLHFCQUFhLE9BQUt2QixLQUFMLENBQVdTLGlCQUwxQjtBQU1FLGVBQU8sT0FBS1IsS0FBTCxDQUFXUztBQU5wQixRQURGO0FBU0U7QUFBQSxtQ0FBWSxNQUFaO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxxQkFBUyxPQUFLVCxLQUFMLENBQVcwQixPQUR0QjtBQUVFLHFCQUFTLE9BQUsxQixLQUFMLENBQVcyQixPQUZ0QjtBQUdFLHNCQUFVLE9BQUszQixLQUFMLENBQVc0QjtBQUh2QjtBQUtHLGlCQUFLRSxPQUFMO0FBTEg7QUFERjtBQVRGLEtBRGdCO0FBQUEsRzs7T0FzQmxCM0IsYSxHQUFnQixZQUFNO0FBQ3BCLFFBQU1RLFVBQVUsT0FBS1osS0FBTCxDQUFXVyx1QkFBWCxJQUFzQyxDQUFDLE9BQUtYLEtBQUwsQ0FBV1ksT0FBbEQsR0FDZCx3REFEYyxHQUVkLE9BQUtaLEtBQUwsQ0FBV1ksT0FGYjtBQUdBLFdBQ0VBLFVBQ0U7QUFBQTtBQUFBLFFBQWdCLFdBQVUsUUFBMUIsRUFBbUMsU0FBUyxPQUFLb0IsVUFBTCxDQUFnQnBCLE9BQWhCLENBQTVDLEVBQXNFLE9BQU8sT0FBS1osS0FBTCxDQUFXYSxZQUF4RjtBQUNHLGFBQUtvQixlQUFMO0FBREgsS0FERixHQUlFLE9BQUtBLGVBQUwsRUFMSjtBQU9ELEc7O2tCQTdIa0JsQyxTIiwiZmlsZSI6InNlYXJjaGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSW5wdXRHcm91cCxcbiAgRm9ybUNvbnRyb2wsXG4gIE92ZXJsYXlUcmlnZ2VyLFxuICBUb29sdGlwLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICcuL3NlYXJjaGJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2xvc2VDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2VIb2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB0b29sdGlwRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xvc2VDbGljazogKCkgPT4ge30sXG4gICAgaW5wdXRDbGFzc05hbWU6ICcnLFxuICAgIHNlYXJjaFBsYWNlSG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICB2YWx1ZTogJycsXG4gICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb206IDAsXG4gICAgdG9vbHRpcDogJycsXG4gICAgdG9vbHRpcERlbGF5OiAwLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzKSA9PiB7XG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKG5leHRQcm9wcykpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2godGhpcy5zdGF0ZS52YWx1ZSk7XG4gIH1cblxuICBvbkR5bmFtaWNTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0LnZhbHVlIHx8ICcnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA8PSB2YWx1ZS5sZW5ndGggfHwgIXZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlKHRoaXMucHJvcHMsIHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xuICAgIHRoaXMucHJvcHMub25DbG9zZUNsaWNrKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQudmFsdWUgfHwgJycpO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZSh0aGlzLnByb3BzLCB2YWx1ZSkpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMub25TZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSA9IChwcm9wcyA9IHRoaXMucHJvcHMsIHZhbHVlID0gcHJvcHMudmFsdWUpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IHByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbkR5bmFtaWNTZWFyY2ggOiB0aGlzLm9uQ2hhbmdlO1xuICAgIGNvbnN0IGR5bmFtaWMgPSBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdkeW5hbWljLXNlYXJjaCAnIDogJyc7XG4gICAgY29uc3QgY2xvc2UgPSB2YWx1ZSAmJiBwcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/ICdidG4tY2xvc2UgJyA6ICcnO1xuICAgIGNvbnN0IGJzQ2xhc3MgPSBgJHtkeW5hbWljfSR7Y2xvc2V9YnRuYDtcbiAgICBjb25zdCBvbkNsaWNrID0gdmFsdWUgJiYgcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyB0aGlzLm9uQ2xvc2VDbGljayA6IHRoaXMub25TZWFyY2g7XG4gICAgY29uc3Qgb25LZXlEb3duID0gIXByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tID8gdGhpcy5vbktleURvd24gOiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICBjb25zdCB0eXBlID0gcHJvcHMuZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb20gPyAndGV4dCcgOiAnc2VhcmNoJztcbiAgICByZXR1cm4ge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbktleURvd24sXG4gICAgICBic0NsYXNzLFxuICAgICAgb25DbGljayxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB0eXBlLFxuICAgIH07XG4gIH1cblxuICBnZXRJY29uID0gKCkgPT4gKFxuICAgIHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5keW5hbWljU2VhcmNoU3RhcnRzRnJvbSA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgLz4gOiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiAvPlxuICApXG5cbiAgZ2V0VG9vbHRpcCA9IHRvb2x0aXAgPT4gKFxuICAgIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPlxuICAgICAge3Rvb2x0aXB9XG4gICAgPC9Ub29sdGlwPlxuICApXG5cbiAgcmVuZGVyU2VhcmNoQmFyID0gKCkgPT4gKFxuICAgIDxJbnB1dEdyb3VwPlxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIHR5cGU9e3RoaXMuc3RhdGUudHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zdGF0ZS5vbkNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLnN0YXRlLm9uS2V5RG93bn1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2VIb2xkZXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJzQ2xhc3M9e3RoaXMuc3RhdGUuYnNDbGFzc31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5nZXRJY29uKCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9JbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICA8L0lucHV0R3JvdXA+XG4gIClcblxuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLnByb3BzLmR5bmFtaWNTZWFyY2hTdGFydHNGcm9tICYmICF0aGlzLnByb3BzLnRvb2x0aXAgP1xuICAgICAgJ1NlYXJjaCBzdGFydHMgd2hlbiB5b3UgaGF2ZSBlbnRlcmVkIGVub3VnaCBjaGFyYWN0ZXJzLicgOlxuICAgICAgdGhpcy5wcm9wcy50b29sdGlwO1xuICAgIHJldHVybiAoXG4gICAgICB0b29sdGlwID9cbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9e3RoaXMuZ2V0VG9vbHRpcCh0b29sdGlwKX0gZGVsYXk9e3RoaXMucHJvcHMudG9vbHRpcERlbGF5fT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWFyY2hCYXIoKX1cbiAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj4gOlxuICAgICAgICB0aGlzLnJlbmRlclNlYXJjaEJhcigpXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWFyY2gtYmFyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==