'use strict';

console.log("App.js is running!");

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var visibility = false;

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some you can now see!'
            )
        )
    );
    ReactDOM.render(jsx, document.getElementById("app"));
};
render();
