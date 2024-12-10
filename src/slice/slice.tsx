import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { evaluate } from '../utils/utils';

interface IInitialState {
  currentOperand: string;
  previousOperand: string;
  operation: string;
  overwrite: boolean;
}

const initialState: IInitialState = {
  currentOperand: '',
  previousOperand: '',
  operation: '',
  overwrite: false,
};

const slice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      if (action.payload === '0' && state.currentOperand === '0') {
        return;
      }
      if (action.payload === '.' && state.currentOperand?.includes('.')) {
        return;
      }
      if (!state.overwrite) {
        state.currentOperand = state.currentOperand + action.payload;
      }
      if (state.overwrite) {
        state.currentOperand = '';
        state.currentOperand = state.currentOperand + action.payload;
        state.overwrite = false;
      }
    },
    allClear: (state) => {
      state.currentOperand = '';
      state.previousOperand = '';
      state.operation = '';
    },
    addOperation: (state, action: PayloadAction<string>) => {
      if (!state.currentOperand && !state.previousOperand) {
        return state;
      }
      if (!state.currentOperand) {
        state.operation = action.payload;
      }
      if (!state.previousOperand) {
        state.operation = action.payload;
        state.previousOperand = state.currentOperand;
        state.currentOperand = '';
      }
      if (state.previousOperand && state.currentOperand) {
        state.previousOperand = evaluate(state);
        state.operation = action.payload;
        state.currentOperand = '';
      }
    },
    compute: (state) => {
      if (!state.operation || !state.currentOperand || !state.previousOperand) {
        return;
      }
      state.overwrite = true;
      state.currentOperand = evaluate(state);
      state.previousOperand = '';
      state.operation = '';
    },
  },
});

const { reducer, actions } = slice;
export default reducer;
export const { addDigit, allClear, addOperation, compute } = actions;
