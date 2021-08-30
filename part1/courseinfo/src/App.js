const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
  <div>
    <Part myPart={props.parts[0].name} myExecise={props.parts[0].exercises}/>
    <Part myPart={props.parts[1].name} myExecise={props.parts[1].exercises}/>
    <Part myPart={props.parts[2].name} myExecise={props.parts
      [2].exercises}/>
  </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.myPart} {props.myExecise} </p>
    </div>

  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + 
                              props.parts[1].exercises + 
                              props.parts[2].exercises
                              }</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header header={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App