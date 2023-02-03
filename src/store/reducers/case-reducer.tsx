import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  caseLoading: false,
  createCaseLoading: false,
};

export const userCases = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCaseLoading: (state, action) => {
      state.caseLoading = action.payload;
    },
    setCreateCaseLoading: (state, action) => {
      state.createCaseLoading = action.payload;
    },
    reset: (state, action) => {
      state = initialState;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setCaseLoading,
  setCreateCaseLoading,
  reset,
  // demoAsync
} = userCases.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userCases.reducer;
