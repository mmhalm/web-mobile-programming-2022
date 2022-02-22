import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }

  kasvataYhdella = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>{this.state.counter}</div>
        <div>
          <button onClick={this.kasvataYhdella}>
            plus
          </button>
        </div>
        <h1>statistiikka</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)