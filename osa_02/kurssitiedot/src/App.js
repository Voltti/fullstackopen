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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
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
    <Total parts={course.parts} />
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

const Total = ({parts}) => {
  return (
    <>
      <p>
        total of {parts.map( x => x.exercises).reduce( (a,b) => a+b)} exercises
      </p>
    </>
  );
};

export default App;