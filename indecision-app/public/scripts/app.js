'use strict';

console.log("App.js is running!");
// create app object title/subtitle
//use title/subtitle in the template
//render template

//if statements
//ternary operators
//
var app = {
    title: 'some title',
    subtitle: 'This is my subtitle'
};
//JSX -JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
var user = {
    name: 'Jing',
    age: 26,
    location: 'New York'
};
var userName = 'Jing';
var userAge = 27;
var userLocation = 'NYC';
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var app2Root = document.getElementById("app2");
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
