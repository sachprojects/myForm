"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Get the element id from index.html
var appRoot = document.getElementById('myid');

// FormApp Component

var FormsApp = function (_React$Component) {
    _inherits(FormsApp, _React$Component);

    function FormsApp(props) {
        _classCallCheck(this, FormsApp);

        var _this = _possibleConstructorReturn(this, (FormsApp.__proto__ || Object.getPrototypeOf(FormsApp)).call(this, props));

        _this.onSubmitClick = _this.onSubmitClick.bind(_this);

        _this.state = {
            title: "Person Data Form"
        };
        return _this;
    }

    // Submit button event handler


    _createClass(FormsApp, [{
        key: "onSubmitClick",
        value: function onSubmitClick(model) {
            alert(JSON.stringify(model));
            console.log(model);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, {
                    title: this.state.title,
                    model: [{ key: "name", label: "Name", required: true, field: "input" }, { key: "dob", label: "DOB", required: true, type: "date", field: "input" }, { key: "gender", label: "Gender", field: "select", options: ['', 'male', 'female'] }],
                    onSubmitClick: this.onSubmitClick
                })
            );
        }
    }]);

    return FormsApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this2 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this2.onSubClick = _this2.onSubClick.bind(_this2);
        _this2.onChange = _this2.onChange.bind(_this2);
        _this2.state = {};
        return _this2;
    }

    // Submit button handler


    _createClass(Header, [{
        key: "onSubClick",
        value: function onSubClick(event) {
            // preventing default action
            event.preventDefault();
            if (this.isAboveEighteen(this.state.dob)) {
                this.props.onSubmitClick(this.state);
            } else {
                alert("Age must be above 18");
            }
        }

        // On change update the initial state

    }, {
        key: "onChange",
        value: function onChange(e, key) {
            this.setState(_defineProperty({}, key, this[key].value));
        }
    }, {
        key: "isAboveEighteen",
        value: function isAboveEighteen(date) {
            // Changed date from from 2000-11-11 to 2000,11,11
            var seconds = Date.now() - new Date(date.replace(/-/g, ","));
            var ageDate = new Date(seconds);
            return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18 ? true : false;
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.onSubClick },
                    this.props.model.map(function (item) {
                        return React.createElement(
                            "div",
                            { key: item.key },
                            React.createElement(
                                "label",
                                {
                                    key: "l" + item.key,
                                    htmlFor: item.key
                                },
                                item.label
                            ),
                            item.field === "input" && React.createElement("input", {
                                key: "i" + item.key,
                                ref: function ref(key) {
                                    _this3[item.key] = key;
                                },
                                id: item.key,
                                type: item.type || "text",
                                required: item.required || false,
                                onChange: function onChange(e) {
                                    _this3.onChange(e, item.key);
                                }
                            }),
                            item.field === "select" && React.createElement(
                                "select",
                                {
                                    key: "s" + item.key,
                                    ref: function ref(key) {
                                        _this3[item.key] = key;
                                    },
                                    onChange: function onChange(e) {
                                        _this3.onChange(e, item.key);
                                    }
                                },
                                item.options.map(function (option) {
                                    return React.createElement(
                                        "option",
                                        { key: option + item.key, value: option },
                                        option
                                    );
                                })
                            )
                        );
                    }),
                    React.createElement(
                        "button",
                        null,
                        "Submit"
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

// Rendering FormApp 


ReactDOM.render(React.createElement(FormsApp, null), appRoot);
