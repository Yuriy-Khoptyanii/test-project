import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '../../types/Product';
import { deleteProduct } from '../goodsList/GoodsListSlice.slice';

type Props = {
  row: Product;
};

export const TableDeleteButton: React.FC<Props> = memo(({ row }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(deleteProduct(row.id))}
    >
      Delete
    </button>
  );
});
