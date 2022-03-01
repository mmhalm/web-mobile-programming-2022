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

  // klikGood = () => {
  //   this.setState({
  //     good: this.state.good + 1
  //   })
  //   this.updateStatistics()
  // }

  // klikMiddle = () => {
  //   this.setState({
  //     middle: this.state.middle + 1
  //   })
  //   this.updateStatistics()
  // }
  
  // klikBad = () => {
  //   this.setState({
  //     bad: this.state.bad + 1
  //   })
  //   this.updateStatistics()
  // }

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
  
  // asetaArvoon2 = (arvo) => () => this.setState({ middle: arvo })
  // asetaArvoon3 = (arvo) => () => this.setState({ bad: arvo })

  asetaArvoon4 = (arvo) => () => this.setState({average: arvo})
  asetaArvoon5 = (arvo) => () => this.setState({pos: arvo})

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
          
          {/* <button onClick={this.klikGood}>hyvä</button> */}
          <Button
            handleClick={this.asetaArvoon1(this.state.good + 1)}
            // handleClick={this.asetaArvoon4((this.state.bad*(-1) + this.state.good) / (this.state.bad + this.state.good + this.state.middle))
            // }
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
          {/* <button onClick={this.klikMiddle}>neutraali</button>
          <button onClick={this.klikBad}>huono</button> */}

        </div>
        <div>
          <h1>statistiikka</h1>
          {/* <Statistic 
            handleClick={this.asetaArvoon4((this.state.bad*(-1) + this.state.good) / (this.state.bad + this.state.good + this.state.middle))}
          />
          <Statistic 
          handleClick={this.asetaArvoon5(this.state.good / (this.state.bad + this.state.good + this.state.middle) * 100)}
          /> */}
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
  <div>
    <p>hyvä {props.info.good}</p>
    <p>neutraali {props.info.middle}</p>
    <p>huono {props.info.bad}</p>
    <p>keskiarvo {props.info.average}</p>
    <p>positiivisia {props.info.pos} %</p>
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