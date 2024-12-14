import { configureStore } from '@reduxjs/toolkit';
import calculator from '../slice/slice';
import dragAndDrop from '../slice/dragAndDropSlice';

const store = configureStore({
  reducer: { calculator, dragAndDrop },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
