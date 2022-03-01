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

  asetaArvoon1 = (arvo) => {
    return() => {
      this.setState({ good: arvo })
      this.updateAverage()
    }
  }
  asetaArvoon2 = (arvo) => {
    return() => {
      this.setState({ middle: arvo })
      this.updateAverage()
    }
  }
  asetaArvoon3 = (arvo) => {
    return() => {
      this.setState({ bad: arvo })
      this.updateAverage()
    }
  }

  updateAverage = () => {
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
          <Button
            handleClick={this.asetaArvoon1(this.state.good + 1)}
            text="hyvä"
          />
          <Button
            handleClick={this.asetaArvoon2(this.state.middle + 1)}
            text="neutraali"
          />
          <Button
            handleClick={this.asetaArvoon3(this.state.bad + 1)}
            text="huono"
          />
        </div>
        <div>
          <h1>statistiikka</h1>
          <Statistics info={this.state} />
        </div>
      </div>
    )
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  // <div>
  //   <p>hyvä {props.info.good}</p>
  //   <p>neutraali {props.info.middle}</p>
  //   <p>huono {props.info.bad}</p>
  //   <p>keskiarvo {props.info.average}</p>
  //   <p>positiivisia {props.info.pos} %</p>
  // </div>
  // if (props.info.good == props.info.bad == props.info.middle == 0) {
  //   return (
  //     <div>
  //       <p>yhtään palautetta ei ole annettu</p>
  //     </div>
  //   )
  // }
  <div>
    <table>
      <tr>
        <td>hyvä</td>
        <td>{props.info.good}</td>
      </tr>
      <tr>
        <td>neutraali</td>
        <td>{props.info.middle}</td>
      </tr>      
      <tr>
        <td>huono</td>
        <td>{props.info.bad}</td>
      </tr>      
      <tr>
        <td>keskiarvo</td>
        <td>{props.info.average}</td>
      </tr>
      <tr>
        <td>positiivisia</td>
        <td>{props.info.pos} %</td>
      </tr>
    </table>
  </div>
  
)

const Statistic = (props) => (
  props.handleClick
)

// class Statistic extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       average: props.info.average, 
//       positives: props.info.pos
//     }
//   }

//   updateStatistics = () => {
//     this.setState({
//       average: (this.props.info.bad*(-1) + this.props.info.good) / (this.props.info.bad + this.props.info.good + this.props.info.middle),
//       positives: this.props.info.good / (this.props.info.bad + this.props.info.good + this.props.info.middle) * 100
//     })
//   }

//   render(){
//     return(
//       this.updateStatistics()
//       [this.state.average,
//       this.state.positives]
//     )
//   }
// }


ReactDOM.render(
  <App />,
  document.getElementById('root')
)