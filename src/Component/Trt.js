import React,{Component} from "react";
import Try2 from './Try2'

class Try extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make this work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));

  }
 
 
  render(){
    return (
      <div className="App">
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"} 
          </button>
        </div>

        <Try2 nowState={this.state.isToggleOn} />
      </div>
    );
  }
 
}

export default Try;