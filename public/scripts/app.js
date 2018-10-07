"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        value: function onSubmitClick() {
            alert("Submit Clicked");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, {
                    title: this.state.title,
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
        return _this2;
    }

    // Submit button handler


    _createClass(Header, [{
        key: "onSubClick",
        value: function onSubClick(event) {
            // preventing default action
            event.preventDefault();
            this.props.onSubmitClick();
        }
    }, {
        key: "render",
        value: function render() {
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
                    React.createElement(
                        "label",
                        { htmlFor: "name" },
                        "Name"
                    ),
                    React.createElement("input", { id: "name" }),
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
