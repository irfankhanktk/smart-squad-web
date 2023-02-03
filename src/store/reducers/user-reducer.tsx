import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    email: '',
    name: '',
    userId: '',
    noOfEmployees: 0,
    phone: '',
    ccNo: '123',
    creatorId: null,
    role: '',
  },
  loginLoading: false,
  signupLoading: false,
  forgotPasswordLoading: false,
  language: 'en',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setLoginLoading: (state, action) => {
      state.loginLoading = action.payload;
    },
    setSignupLoading: (state, action) => {
      state.signupLoading = action.payload;
    },
    setForgotPassowrdLoading: (state, action) => {
      state.forgotPasswordLoading = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },

    reset: (state, action) => {
      state = initialState;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  reset,
  setLoginLoading,
  setSignupLoading,
  setForgotPassowrdLoading,
  setLanguage
  // demoAsync
} = userSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userSlice.reducer;
