import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '../../types/Product';
import { deleteProduct } from '../goodsList/GoodsListSlice.slice';

type Props = {
  row: Product;
};

export const TableDeleteButton: React.FC<Props> = memo(({ row }) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      type="button"
      onClick={() => dispatch(deleteProduct(row.id))}
      aria-label="delete"
      size="large"
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
});
