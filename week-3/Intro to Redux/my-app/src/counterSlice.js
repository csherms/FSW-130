import { createSlice } from '@reduxjs/toolkit';


let incrementers = null;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { 
    secondsElapsed: 0, 
    laps: []
},
  reducers: {
    stop: () => {
      clearInterval(incrementers);
    },
    reset: (state) => {
      clearInterval(incrementers);
      state.secondsElapsed = 0;
      state.laps = [];
    },
    log: (state) => {
      state.laps = state.laps.concat([state.secondsElapsed]);
    },
    start: (state, action) => {
      state.secondsElapsed += action.payload;
    },
  },
});

export const { start, stop, reset, log } = counterSlice.actions;


export const startAsync = amount => dispatch => {
  incrementers = setInterval(() => {
    dispatch(start(amount));
  }, 1000);
};

export const selectCount = state => state.counter.secondsElapsed;
export const lap = state => state.counter.laps;


export default counterSlice.reducer;