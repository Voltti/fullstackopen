
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
    return <h2>{name}</h2>;
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
          <strong>total of {parts.map( p => p.exercises).reduce( (a,b) => a+b)} exercises</strong> 34+24+25+25
        </p>
      </>
    );
  };

  export default Course;