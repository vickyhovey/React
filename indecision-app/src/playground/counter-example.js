// // VisibilityToggle - render, constructor, handleToggleVisibility
// // visibility -> false

// class VisibilityToggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleToggleVisibility = this.handleToggleVisibility(this);

//     }
//     handleToggleVisibility(prevVisibility) {


//     }
//     render() {
//         return (
//             <div>
//             <button onClick = {this.handleToggleVisibility}>Show</button>
//             </div>

//         );

//     }
// }
// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
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
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(prevProps, prevStates) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }

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
Counter.defaulProps = {
    count: 100
};
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