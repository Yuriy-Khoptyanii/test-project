/* eslint-disable no-console */
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGoods } from './GoodsListSlice.slice';
import { GoodListTable } from '../goodListTable/GoodListTable';
import type { RootState } from '../../store';
import { Product } from '../../types/Product';

type Props ={
  nameSearch: string,
};

type Data = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export const GoodsList: React.FC<Props> = memo(({ nameSearch }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data: Data) => {
        const finalGoods = data.products.map(({
          id, title, description, price, images, rating, stock, category,
        }) => {
          return {
            id, title, description, price, images, rating, stock, category,
          };
        });

        dispatch(setGoods(finalGoods));
        setIsLoading(false);
      });
  }, []);

  const goods: Product[] = useSelector((state: RootState) => state.goods.items);

  const visibleGoods = goods.filter(prod => (
    prod.title.toLowerCase().includes(nameSearch.toLowerCase())
        || prod.category.toLowerCase().includes(nameSearch.toLowerCase())));

  return (
    <>
      {isLoading
        ? <p>Data is Loading...</p>
        : <GoodListTable data={visibleGoods} />}
    </>
  );
});
