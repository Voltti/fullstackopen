import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const giveFeedback = (value, func) => () => func(value + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Buttonset
        handleOnClicks={[
          giveFeedback(good, setGood),
          giveFeedback(neutral, setNeutral),
          giveFeedback(bad, setBad),
        ]}
      />
      <Header text="statistics" />
      <Statistics values={[good, neutral, bad]} />
    </div>
  );
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Buttonset = ({ handleOnClicks, texts }) => {
  return (
    <>
      <Button handleOnClick={handleOnClicks[0]} text={"good"} />
      <Button handleOnClick={handleOnClicks[1]} text={"neutral"} />
      <Button handleOnClick={handleOnClicks[2]} text={"bad"} />
    </>
  );
};

const Statistics = ({ values }) => {
  const sum_value = values.reduce((a, b) => a + b);
  if (sum_value === 0) return <div>No feedback given</div>;

  const grades = [1, 0, -1];
  const avg_value =
    values
      .map((value, index) => value * grades[index])
      .reduce((a, b) => a + b) / sum_value;

  return (
    <table>
      <tbody>
        <StaticsLine value={values[0]} text="good" />
        <StaticsLine value={values[1]} text="neutral" />
        <StaticsLine value={values[2]} text="bad" />
        <tr>
          <td>all</td>
          <td>{sum_value}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{avg_value}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{(values[0] / sum_value) * 100} %</td>
        </tr>
      </tbody>
    </table>
  );
};

const Button = ({ handleOnClick, text }) => {
  return <button onClick={handleOnClick}>{text}</button>;
};

const StaticsLine = ({ value, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default App;
