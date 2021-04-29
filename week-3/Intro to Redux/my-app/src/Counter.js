import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {stop, reset, log, selectCount, lap, startAsync} from './counterSlice';


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2);

export function Counter() {
  const count = useSelector(selectCount);
  const logging = useSelector(lap);
  const dispatch = useDispatch();

  const Button = (props) =>
  <button type="button" {...props} className={"btn " + props.className}/>;

  return (
    <div>
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(count)}</h1>
          <Button className="start-btn" onClick={() => dispatch(startAsync(1))}>start</Button>
          <Button className="stop-btn" onClick={() => dispatch(stop())}>stop</Button>
          <Button onClick={() => dispatch(reset())}>reset</Button>
          <Button onClick={() => dispatch(log())}>lap</Button>
        <ul className="stopwatch-laps">
          { logging.map((laps, i) =>
              <li key={i} className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(laps)}</li>)
          }
        </ul>
      </div>
    </div>
  );
}


export default Counter;