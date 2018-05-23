console.log("App.js is running!");


const toggleVisibility = () => {
    visibility = !visibility;
    render();

};


let visibility = false;

const render = () => {
    const jsx = (
    <div>
        
        <h1>Visibility Toggle</h1>

        <button onClick={toggleVisibility}>
         {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
            <div>
                <p>Hey. These are some you can now see!</p>
            </div>
        )}
    </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
};
render();