import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      toast.success('Signed in successfully');
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
        toast.error(action.payload);
    },
    
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
} = userSlice.actions;

export default userSlice.reducer;