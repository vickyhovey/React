// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Visibility: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });


    }
    render() {
        return (
            <div>

             <h1>Visibility Toggle</h1>
             <button onClick={this.handleToggleVisibility}>
             {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
             {this.state.visibility && (
             <div>
                 <p>Hey. These are some you can now see!</p>
             </div>
         )}
         </div>
    
        );
        }

    }
    

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
















// console.log("App.js is running!");


// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();

// };


// let visibility = false;

// const render = () => {
//     const jsx = (
//     <div>
        
//         <h1>Visibility Toggle</h1>

//         <button onClick={toggleVisibility}>
//          {visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {visibility && (
//             <div>
//                 <p>Hey. These are some you can now see!</p>
//             </div>
//         )}
//     </div>
//     );
//     ReactDOM.render(jsx, document.getElementById("app"));
// };
// render();