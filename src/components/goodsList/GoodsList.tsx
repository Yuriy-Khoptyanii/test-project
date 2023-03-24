import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGoods } from './GoodsListSlice.slice';
import type { RootState } from '../../store';
import { Product } from '../../types/Product';

export const GoodsList: React.FC = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setGoods(data));
        setIsLoading(false);
      });
  }, []);

  const goods: Product[] = useSelector((state: RootState) => state.goods.items);
  // console.log({ goods });

  if (!Array.isArray(goods)) {
    return null;
  }

  return (
    <>
      {!isLoading && goods}
    </>
  );
});

// {
// id
// title
// description
// price
// images
// rating
// stock
// category
// }
