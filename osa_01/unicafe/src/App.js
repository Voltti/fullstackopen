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
        texts={["good", "neutral", "bad"]}
      />
      <Header text="statistics" />
      <Statistics
        values={[good, neutral, bad]}
        texts={["good", "neutral", "bad"]}
      />
    </div>
  );
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Buttonset = ({ handleOnClicks, texts }) => {
  return (
    <>
      <Button handleOnClick={handleOnClicks[0]} text={texts[0]} />
      <Button handleOnClick={handleOnClicks[1]} text={texts[1]} />
      <Button handleOnClick={handleOnClicks[2]} text={texts[2]} />
    </>
  );
};

const Statistics = ({ values, texts }) => {
  const sum_value = values.reduce((a, b) => a + b);
  if (sum_value === 0) return <div>No feedback given</div>;

  const grades = [1, 0, -1];
  const avg_value =
    values
      .map((value, index) => value * grades[index])
      .reduce((a, b) => a + b) / sum_value;

  return (
    <>
      <Stat value={values[0]} text={texts[0]} />
      <Stat value={values[1]} text={texts[1]} />
      <Stat value={values[2]} text={texts[2]} />
      <div>all {sum_value}</div>
      <div>average {avg_value}</div>
      <div>positive {(values[0] / sum_value) * 100} %</div>
    </>
  );
};

const Button = ({ handleOnClick, text }) => {
  return <button onClick={handleOnClick}>{text}</button>;
};

const Stat = ({ value, text }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};

export default App;
