import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUser: null,
  messages: [],
};

const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      console.log(`SET SLECTED STATE = ,`,state)
      state.selectedUser = action.payload;
    },

    addMessage: (state, action) => {
      console.log("IN REDUX ")
      console.log(state)
      console.log(action)

      if (!state['messages']) {
        console.log('no message found');
        return;
      }
      state.messages.push(action.payload);
    },
  },
});

export const { setSelectedUser, addMessage } = conversationSlice.actions;

export default conversationSlice.reducer;