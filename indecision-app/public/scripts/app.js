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
    options: []
};
//JSX -JavaScript XML
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    // Math.random() generate random number between 0 and 1.
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

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


var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var render = function render() {
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
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        numbers.map(function (number) {
            return React.createElement(
                'p',
                { key: number },
                'Number: ',
                number
            );
        }),
        React.createElement(
            'ol',
            null,
            /* map over app.options getting back an array of lis (set key and text) */
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
