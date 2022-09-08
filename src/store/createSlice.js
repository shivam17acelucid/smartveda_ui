import {createSlice} from '@reduxjs/toolkit';
const mobileSlice = createSlice({
  name: 'mobile',
  initialState: {
    mobile: 999999999,
  },
  reducers: {
    setMobile(state, action) {
      state.mobile = action.payload;
    },
  },
});
export const {setMobile} = mobileSlice.actions;
export default mobileSlice.reducer;
