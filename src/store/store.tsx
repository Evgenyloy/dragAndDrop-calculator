import { configureStore } from '@reduxjs/toolkit';
import calculator from '../slice/slice';
import dragAndDrop from '../slice/dragAndDropSlice';

const store = configureStore({
  reducer: { calculator, dragAndDrop },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['addRowItem'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

export default store;
