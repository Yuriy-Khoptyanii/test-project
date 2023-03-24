/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

export interface GoodsState {
  items: Product[],
}

const initialState: GoodsState = {
  items: [],
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
      const product = state.items.find(el => el.id === id);

      if (product) {
        Object.assign(product, updates);
      }
    },

    deleteProduct: (state, action) => {
      const { id } = action.payload;

      const index = state.items.findIndex(el => el.id === id);

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    setGoods: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  setGoods,
} = goodsSlice.actions;

export default goodsSlice.reducer;
