// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind({ name: 'Jing'});

// console.log(getName());


// stateless functional component
class IndecisionApp extends React.Component {
    constructor(props) { 
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [] 

        };
        
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };

        });
    }
    // handleDeleteOptions
    // handlePick - pass down to Action and setup onClick - bind here
    handlePick() {
        //random select options
      const randomNum = Math.floor(Math.random()*this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
        }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';

        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            //prevState.options.push(option);
            return {
                options: prevState.options.concat([option])
            };
        });

    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick} 
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
// class Header extends React.Component {
//     render() {
        
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
const Action = (props) => {
    
        return (
            <div>

                <button
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    };


// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handlePick');
//     // }

//     render() {
//         return (
//             <div>
            
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                   What should I do?
//                 </button>
//             </div>
//         );
//     }
// }
// Options -> Options component here


class Options extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll() {
    //     console.log(this.props.options);
    //     //alert('handleRemoveAll');
    // }
    render() {
        return <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            {this.props.options.length}
            {
                //this.props.options.map((option) => <p key={option}>{option}</p>
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
          </div>;
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

// AddOption -> AddOption component here
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined

        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {error};
        });
    }
    render() {
        return (
            <div>
               {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
               </form>
            </div>
        );
    }
}
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

// const User =  (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );

// };
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));