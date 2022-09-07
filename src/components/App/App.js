import { Component } from 'react';
import './App.css';
import '../../Api.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [ ]
    }
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;