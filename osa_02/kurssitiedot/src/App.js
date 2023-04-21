const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  
  return (
    <div>
      <Course course={course} />
    </div>
  )
};

const Course = ({course}) => {

  return (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    </>
  )


}

const Header = ({name}) => {
  return <h1>{name}</h1>;
};

const Content = ({parts}) => {

  return (
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </>
  );
};

const Part = ({part}) => {
  return (
      <p>
        {part.name} {part.exercises}
      </p>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </>
  );
};

export default App;