import 'prop-types';
import React from 'react';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var labelStyles = {
  boxSizing: "border-box",
  display: "inline-block",
  fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  paddingTop: 5,
  position: "relative"
};

var spanStyles = {
  boxSizing: "border-box",
  fontSize: "1rem",
  left: 0,
  padding: "17px 0 13px 0",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  transition: "font-size 200ms, padding 200ms",
  zIndex: 1
};

var floatingStyles = {
  fontSize: "0.625rem",
  padding: 0
};

var inputStyles = {
  border: "none",
  borderBottom: "1px solid black",
  boxSizing: "border-box",
  fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  fontSize: "1rem",
  padding: "12px 0 8px 0"
};

var focusStyles = {
  borderColor: "blue",
  outline: "none"
};

var FloatingLabel = function (_React$Component) {
  inherits(FloatingLabel, _React$Component);

  function FloatingLabel() {
    var _temp, _this, _ret;

    classCallCheck(this, FloatingLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      floating: false,
      focused: false,
      value: _this.props.value
    }, _this.handleChange = function (evt) {
      var value = evt.target.value;

      _this.props.onChange(evt);

      _this.setState({
        value: value
      });
    }, _this.handleFocusChange = function (evt) {
      evt.type === "focus" ? _this.props.onFocus(evt) : _this.props.onBlur(evt);

      _this.setState({
        focused: !_this.state.focused
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  FloatingLabel.prototype.isFloating = function isFloating(value, focused) {
    return value.length || focused;
  };

  FloatingLabel.prototype.render = function render() {
    var _state = this.state,
        value = _state.value,
        focused = _state.focused;
    var styles = this.props.styles;

    var floating = this.isFloating(value, focused);
    var Node = this.props.element;
    var floatingStyle = floating && Object.assign({}, floatingStyles, styles.floating);
    var focusStyle = focused && Object.assign({}, focusStyles, styles.focus);
    var labelStyle = Object.assign({}, labelStyles, styles.label);
    var spanStyle = Object.assign({}, spanStyles, styles.span, floatingStyle);
    var inputStyle = Object.assign({}, inputStyles, styles.input, focusStyle);

    return React.createElement(
      "label",
      { htmlFor: this.props.id, style: labelStyle },
      React.createElement(
        "span",
        { style: spanStyle },
        this.props.placeholder
      ),
      React.createElement(Node, {
        autoCapitalize: this.props.autoCapitalize,
        autoComplete: this.props.autoComplete,
        autoFocus: this.props.autoFocus,
        defaultValue: this.props.value,
        id: this.props.id,
        inputMode: this.props.inputMode,
        max: this.props.max,
        maxLength: this.props.maxLength,
        min: this.props.min,
        minLength: this.props.minLength,
        name: this.props.name,
        onBlur: this.handleFocusChange,
        onChange: this.handleChange,
        onFocus: this.handleFocusChange,
        pattern: this.props.pattern,
        readOnly: this.props.readOnly,
        required: this.props.required,
        spellCheck: this.props.spellCheck,
        step: this.props.step,
        style: inputStyle,
        type: this.props.type,
        ref: this.props.getRef
      })
    );
  };

  return FloatingLabel;
}(React.Component);

FloatingLabel.defaultProps = {
  autoFocus: false,
  disabled: false,
  element: "input",
  name: "",
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  placeholder: "",
  readOnly: false,
  required: false,
  step: 1,
  styles: {},
  type: "text",
  value: "",
  getRef: function getRef() {}
};

export default FloatingLabel;
export { labelStyles, spanStyles, floatingStyles, inputStyles, focusStyles };
