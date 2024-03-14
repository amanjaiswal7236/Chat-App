// conversationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUser: null,
};

const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
  },
});

export const { setSelectedUser } = conversationSlice.actions;

export default conversationSlice.reducer;
