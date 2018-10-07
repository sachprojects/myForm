// Get the element id from index.html
const appRoot = document.getElementById('myid');

// FormApp Component
class FormsApp extends React.Component{
    constructor(props){
        super(props);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        
        this.state = {
            title: "Person Data Form",
        }   
    }

    // Submit button event handler
    onSubmitClick(){
        alert("Submit Clicked");
    }

    render(){
        return (
            <div>
                <Header 
                    title={this.state.title}
                    onSubmitClick={this.onSubmitClick}
                />
            </div>
        );
    }
}

class Header extends React.Component{

    constructor(props){
        super(props);
        this.onSubClick = this.onSubClick.bind(this);
    }

    // Submit button handler
    onSubClick(event){
        // preventing default action
        event.preventDefault();
        this.props.onSubmitClick();
    }

    render(){
        return (        
                <div>
                    <h1>{this.props.title}</h1>
                    <form onSubmit={this.onSubClick}>
                        <label htmlFor="name">Name</label>
                        <input id="name"></input>
                        <button>Submit</button>
                    </form>
                </div>
               );
    }
}

// Rendering FormApp 
ReactDOM.render(<FormsApp />,appRoot);