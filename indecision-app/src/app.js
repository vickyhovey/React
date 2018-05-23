console.log("App.js is running!");
// create app object title/subtitle
//use title/subtitle in the template
//render template

//if statements
//ternary operators
//logical and operator

//only render the subtitle (and p tag) if subtitile exist - logical and operator
//render new p tag - if options.length >0 "Here are your options" "No options"

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
//JSX -JavaScript XML
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    // Math.random() generate random number between 0 and 1.
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    

};

const user = {
    
    age: 8,
    location: 'New York'
};

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    } 
}
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>
          {app.options.length > 0 ? "Here are your options" : "No options"}
        </p>
        
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        

        {numbers.map(number => {
          return <p key={number}>Number: {number}</p>;
        })}

        <ol>
          {/* map over app.options getting back an array of lis (set key and text) */
            app.options.map(option => {
            return <li key={option}>{option}</li>;
          })}
        </ol>
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>;
    ReactDOM.render(template, appRoot);
};
render();