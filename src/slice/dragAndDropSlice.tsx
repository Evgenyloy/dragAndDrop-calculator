import { createSlice } from '@reduxjs/toolkit';
import Row1 from '../components/calculator/Row1';
import Row2 from '../components/calculator/Row2';
import Row3 from '../components/calculator/Row3';
import Row4 from '../components/calculator/Row4';
import { IInitialState } from '../types/types';

export const rowCalculatorItems = [
  { id: '1', row: Row1, order: 1 },
  { id: '2', row: Row2, order: 2 },
  { id: '3', row: Row3, order: 3 },
  { id: '4', row: Row4, order: 4 },
];

const initialState: IInitialState = {
  currentBoard: [],
  currentRow: '',
};

const dragAndDropSlice = createSlice({
  name: 'dragAndDrop',
  initialState,
  reducers: {
    setCurrentRow: (state, action) => {
      state.currentRow = action.payload;
    },
  },
});

const { reducer, actions } = dragAndDropSlice;
export default reducer;
export const { setCurrentRow } = actions;
