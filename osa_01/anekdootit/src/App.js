import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const handleClickNext = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const handleClickVote = () => {
    // const copy = [...points];
    // copy[selected] += 1;
    // setPoints(copy);
    points[selected] += 1;
    setPoints([...points]);
  };

  // console.log(selected);
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>

      <Button handleClick={handleClickVote} text={"vote"} />
      <Button handleClick={handleClickNext} text={"Next anecdote"} />
      <MostVotes anecdotes={anecdotes} points={points} />
    </div>
  );
};

const MostVotes = ({ anecdotes, points }) => {
  const index = points.indexOf(Math.max(...points));
  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[index]}</div>
      <div>has {points[index]} votes</div>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

export default App;
