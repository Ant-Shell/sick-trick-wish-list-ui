import { Component } from 'react';
import './App.css';
import '../../Api'
import '../Card/Card'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [ ]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
    .then((response) => response.json())
    .then((data) => this.setState({ tricks: data}))
    .catch(error => console.log(error))
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