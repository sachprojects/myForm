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
    onSubmitClick(model){
        alert(JSON.stringify(model));
        console.log(model);
    }

    render(){
        return (
            <div>
                <Header 
                    title={this.state.title}
                    model={[
                        {key:"name", label:"Name", required:true, field:"input"},
                        {key:"dob", label:"DOB", required:true, type: "date", field:"input"},
                        {key:"gender", label:"Gender", field:"select", options:['','male','female']},
                    ]}
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
        this.onChange = this.onChange.bind(this);
        this.state = {};
    }

    // Submit button handler
    onSubClick(event){
        // preventing default action
        event.preventDefault();
        if(this.isAboveEighteen(this.state.dob)){
            this.props.onSubmitClick(this.state);
        } else {
            alert("Age must be above 18");
        }
    }

    // On change update the initial state
    onChange(e, key){
        this.setState({
            [key]:this[key].value
        });
    }

    isAboveEighteen(date){
        // Changed date from from 2000-11-11 to 2000,11,11
        let seconds = Date.now() - new Date(date.replace(/-/g,","));
        let ageDate = new Date(seconds);
        return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18? true : false; 
    }

    render(){
        return (        
                <div>
                    <h1>{this.props.title}</h1>
                    <form onSubmit={this.onSubClick}>
                        {/* {Map operation to render different fields} */}
                        {this.props.model.map((item)=>{
                            return (
                                <div key={item.key}>
                                    <label 
                                        key={"l"+item.key} 
                                        htmlFor={item.key}
                                    >
                                        {item.label}
                                    </label>
                                    {/* {if field is input render input element} */}
                                    {
                                        item.field === "input" &&
                                        <input 
                                            key={"i"+item.key} 
                                            ref={(key)=>{this[item.key]=key}}
                                            id={item.key} 
                                            type={item.type || "text"} 
                                            required={item.required || false}
                                            onChange={(e)=>{this.onChange(e,item.key)}}
                                         >
                                        </input>
                                    }
                                    {/* {if field is select render select element} */}
                                    {
                                        item.field === "select" &&
                                        <select 
                                            key={"s"+item.key}
                                            ref={(key)=>{this[item.key]=key}}
                                            onChange={(e)=>{this.onChange(e,item.key)}}
                                         >
                                         
                                         {item.options.map((option)=>{
                                             return (
                                                     <option key={option+item.key} value={option}>
                                                        {option}
                                                     </option>
                                        
                                             );
                                         })}
                                        </select>
                                    }
                                    
                                </div>
                            );
                        })}
                        <button>Submit</button>
                    </form>
                </div>
               );
    }
}

// Rendering FormApp 
ReactDOM.render(<FormsApp />,appRoot);