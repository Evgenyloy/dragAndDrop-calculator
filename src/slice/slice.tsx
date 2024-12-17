import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { evaluate } from '../utils/calculatorUtils';

interface IInitialState {
  currentOperand: string;
  previousOperand: string;
  operation: string;
  overwrite: boolean;
  runTime: boolean;
}

const initialState: IInitialState = {
  currentOperand: '',
  previousOperand: '',
  operation: '',
  overwrite: false,
  runTime: true,
};

const slice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      if (!state.runTime) return;
      if (state.currentOperand.length > 13 && !state.overwrite) return;
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
      if (!state.runTime) return;
      state.currentOperand = '';
      state.previousOperand = '';
      state.operation = '';
    },
    addOperation: (state, action: PayloadAction<string>) => {
      if (!state.runTime) return;
      // if (state.operation) return;
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
      if (!state.runTime) return;
      if (!state.operation || !state.currentOperand || !state.previousOperand) {
        return;
      }
      state.overwrite = true;
      state.currentOperand = evaluate(state);
      state.previousOperand = '';
      state.operation = '';
    },
    setRunTime: (state, action: PayloadAction<boolean>) => {
      state.runTime = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export default reducer;
export const { addDigit, allClear, addOperation, compute, setRunTime } =
  actions;
