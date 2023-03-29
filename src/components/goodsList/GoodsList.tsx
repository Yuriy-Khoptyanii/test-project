/* eslint-disable no-console */
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { setGoods, setLoading } from './GoodsListSlice.slice';
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
  const dispatch = useDispatch();

  const goods: Product[] = useSelector((state: RootState) => state.goods.items);
  const first = useSelector((state: RootState) => state.goods.isFirstLoading);

  console.log({ first, goods });

  useEffect(() => {
    if (first) {
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
          setTimeout(() => {
            dispatch(setLoading(false));
          }, 2000);
        });
    }
  }, [goods]);

  const visibleGoods = goods.filter(prod => (
    prod.title.toLowerCase().includes(nameSearch.toLowerCase())
        || prod.category.toLowerCase().includes(nameSearch.toLowerCase())));

  return (
    <>
      {first
        ? (
          <PacmanLoader
            color="#36d7b7"
          />
        )
        : <GoodListTable data={visibleGoods} />}
    </>
  );
});
