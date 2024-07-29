import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//this called thunk function, it can handle actions with asynchronous logic, different from reducers that asyn logic could not be written inside it.
export const incrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

export default counterSlice.reducer;
