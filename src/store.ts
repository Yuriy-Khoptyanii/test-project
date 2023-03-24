import { configureStore } from '@reduxjs/toolkit';
import goodsSliceReducer from './components/goodsList/GoodsListSlice.slice';

export const store = configureStore({
  reducer: {
    goods: goodsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
