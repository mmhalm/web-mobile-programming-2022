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
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
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
      <p>Total {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</p>
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

  // const part1 = {
  //   name: 'Basics of React',
  //   exercises: 8
  // }
  // const part2 = {
  //   name: 'Using props',
  //   exercises: 10
  // }
  // const part3 = {
  //   name: 'Component states',
  //   exercises: 12
  // }

  const parts = [
    {
      name: 'Basics of React',
      exercises: 8
    },
    {
      name: 'Using props',
      exercises: 10
    },
    {
      name: 'Component states',
      exercises: 12
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Contents parts={parts}/>
      <Total parts={parts}/>      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
