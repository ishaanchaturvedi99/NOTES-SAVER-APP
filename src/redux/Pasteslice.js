import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes'))
    : [],
};

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addtopaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste created successfully');
    },

    updatetopaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste updated successfully');
      }
    },

    resetallpaste: (state) => {
      state.pastes = [];
      localStorage.removeItem('pastes');
      toast.success('All pastes cleared');
    },

    removefrompaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste deleted');
      }
    },
  },
});

export const {
  addtopaste,
  updatetopaste,
  resetallpaste,
  removefrompaste,
} = pasteSlice.actions;

export default pasteSlice.reducer;
