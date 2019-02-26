import * as React from 'react';
import { storiesOf } from '@storybook/react';
import useInterval from './useInterval';

const UseInterval = () => {
  const [sec, setSec] = React.useState(1);
  const [count, setCount] = React.useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, sec * 1000);

  return (
    <>
      <h1>count: {count}</h1>
      <p>
        interval sec: {sec}
        <input
          type="range"
          min="0"
          max="10"
          value={sec}
          onChange={e => {
            const newSec = parseInt(e.target.value) || 1;
            setSec(newSec);
          }}
        />
      </p>
    </>
  );
};

storiesOf('UseInterval', module).add('UseInterval', () => <UseInterval />);
