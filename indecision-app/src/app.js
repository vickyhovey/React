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
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
); 
var user = {
    name: 'Jing',
    age: 26,
    location: 'New York'
};
var userName  = 'Jing';
var userAge = 27;
var userLocation = 'NYC';
function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    } 
}
var templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);


var app2Root = document.getElementById("app2");
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
