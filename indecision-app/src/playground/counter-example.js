class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };

    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        
    }
    handleMinusOne() {
        this.setState(prevState => {
          return { count: prevState.count - 1 };
        });
    }
    handleReset() {
        this.setState(prevState => {
            return { 
                count: 0 
            };
        });
    }
    render() {
        return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
        </div>
        );
}
}

ReactDOM.render(<Counter />, document.getElementById('app'));




// let count = 0;
// const someId = 'myidhere';
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     //console.log('addOne', count);
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     //console.log("minusOne");
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     //console.log("reset");
// };


// //https://reactjs.org/docs/dom-elements.html

// // Challenge
// // Make button "-1" - setup minusOne function and register - log "minusOne"
// // Make reset button "reset" - setup reset function - log "reset"

// const appRoot = document.getElementById("app");


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);

// };

// renderCounterApp();