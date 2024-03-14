import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    sendMessageStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendMessageSuccess: (state, action) => {
      // You can update the state accordingly upon successful message sending
      state.loading = false;
      state.error = null;
      // Optionally, you can update any relevant state such as adding the sent message to a list of messages
      // For example: state.sentMessages.push(action.payload);
      toast.success('Message sent successfully');
    },
    sendMessageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(action.payload);
    },
  },
});

export const {
  sendMessageStart,
  sendMessageSuccess,
  sendMessageFailure,
} = messageSlice.actions;

export default messageSlice.reducer;
