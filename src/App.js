import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }
  handleClick = (e) => {
    let tem= this.state.count
    this.setState({count: tem + 5})
  }
  
  render() {
    return (
      <div className="App">
       <div> {this.state.count} </div>
       <button onClick={this.handleClick}>Click</button> 
      </div>
    );
  }
}
export default App;
