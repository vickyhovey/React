class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}
// Options -> Options component here
class Options extends React.Component {
    render() {
        return <div>
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
    render() {
        return (
            <div>
                <ol>Option1</ol>
                <ol>Option2</ol>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));