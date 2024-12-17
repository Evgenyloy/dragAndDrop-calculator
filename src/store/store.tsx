import { configureStore } from '@reduxjs/toolkit';
import calculator from '../slice/slice';
import dragAndDrop from '../slice/dragAndDropSlice';

const store = configureStore({
  reducer: { calculator, dragAndDrop },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
