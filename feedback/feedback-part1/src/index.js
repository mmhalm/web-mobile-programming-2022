import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      middle: 0,
      bad: 0,
      average: 0,
      pos: 0,
    }
  }

  klikGood = () => {
    this.setState({
      good: this.state.good + 1
    })
    this.updateStatistics()
  }

  klikMiddle = () => {
    this.setState({
      middle: this.state.middle + 1
    })
    this.updateStatistics()
  }
  
  klikBad = () => {
    this.setState({
      bad: this.state.bad + 1
    })
    this.updateStatistics()
  }

  updateStatistics = () => {
    this.setState({
      average: (this.state.bad*(-1) + this.state.good) / (this.state.bad + this.state.good + this.state.middle),
      pos: this.state.good / (this.state.bad + this.state.good + this.state.middle) * 100
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>anna palautetta</h1>
          
          <button onClick={this.klikGood}>hyvä</button>
          <button onClick={this.klikMiddle}>neutraali</button>
          <button onClick={this.klikBad}>huono</button>

        </div>
        <div>
          <h1>statistiikka</h1>
          <p>hyvä {this.state.good}</p>
          <p>neutraali {this.state.middle}</p>
          <p>huono {this.state.bad}</p>
          <p>keskiarvo {this.state.average}</p>
          <p>positiivista {this.state.pos} %</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)