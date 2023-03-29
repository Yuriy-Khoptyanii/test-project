/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

export interface GoodsState {
  items: Product[],
  isFirstLoading: boolean,
}

const initialState: GoodsState = {
  items: [],
  isFirstLoading: true,
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },

    updateProduct: (state, action) => {
      const { id, updates } = action.payload;
      const items = state.items.map((product) => {
        if (product.id === id) {
          return { ...product, ...updates };
        }

        return product;
      });

      return { ...state, items };
    },

    deleteProduct: ((state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload);
    }),

    setGoods: (state, action) => {
      state.items = action.payload;
    },

    setLoading: (state, action) => {
      state.isFirstLoading = action.payload;
    },
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  setGoods,
  setLoading,
} = goodsSlice.actions;

export default goodsSlice.reducer;
