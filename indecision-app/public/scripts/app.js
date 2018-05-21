'use strict';

console.log("App.js is running!");
// create app object title/subtitle
//use title/subtitle in the template
//render template

//if statements
//ternary operators
//logical and operator

//only render the subtitle (and p tag) if subtitile exist - logical and operator
//render new p tag - if options.length >0 "Here are your options" "No options"

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
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
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

    age: 8,
    location: 'New York'
};

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
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
var count = 0;
var someId = 'myidhere';
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log("minusOne");
};
var reset = function reset() {
    console.log("reset");
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);
console.log(templateTwo);
//https://reactjs.org/docs/dom-elements.html

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
