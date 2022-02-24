import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state1 = {
      counter: 0
    }
    this.state2 = {
      counter: 0
    }
    this.state3 = {
      counter: 0
    }
  }

  // kasvataYhdella = (props) => {
  //   this.setState({ counter: this.state.counter + 1 })
  // }

  render() {
    const setToValue = (newValue) => () => { 
      this.setState({ value: newValue })
  }

    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <button onClick={setToValue(this.state1.value+1)}>hyvä</button>
          <button onClick={setToValue(this.state2.value+1)}>keskiverto</button>
          <button onClick={setToValue(this.state3.value+1)}>huono</button>
        </div>
        <div>
          <h1>statistiikka</h1>
          <p>hyvä {this.state1.value}</p>
          <p>keskiverto {this.state2.value}</p>
          <p>huono {this.state3.value}</p>
        </div>
      </div>
      )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)