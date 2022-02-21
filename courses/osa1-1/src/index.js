import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>This is {props.course} </h1>
    </div>
  )
}

const Contents = (props) => {
  return (
    <div>
      <Part part={props.part1}/>
      <Part part={props.part2}/>
      <Part part={props.part3}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Total {props.exercises1 + props.exercises2 + props.exercises3} exercises</p>
    </div>
  )
}

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  // const part1 = 'Basics of React'
  // const exercises1 = 8
  // const part2 = 'Using props'
  // const exercises2 = 10
  // const part3 = 'Component states'
  // const exercises3 = 12

  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }

  return (
    <div>
      <Header course={course} />
      <Contents part1={part1} part2={part2} part3={part3}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
