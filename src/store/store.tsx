import { configureStore } from '@reduxjs/toolkit';
import calculator from '../slice/slice';

const store = configureStore({
  reducer: { calculator },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
