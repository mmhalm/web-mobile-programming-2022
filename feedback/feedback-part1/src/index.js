import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      middle: 0,
      bad: 0
    }
  }

  klikGood = () => {
    this.setState({
      good: this.state.good + 1
    })
  }

  klikMiddle = () => {
    this.setState({
      middle: this.state.middle + 1
    })
  }
  
  klikBad = () => {
    this.setState({
      bad: this.state.bad + 1
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>anna palautetta</h1>
          
          <button onClick={this.klikGood}>hyvä</button>
          <button onClick={this.klikMiddle}>keskiverto</button>
          <button onClick={this.klikBad}>huono</button>

          {this.state.oikea}
        </div>
        <div>
          <h1>statistiikka</h1>
          {this.state.good}
          {this.state.middle}
          {this.state.bad}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)