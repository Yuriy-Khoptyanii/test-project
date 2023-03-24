import React, { memo } from 'react';
import { SearchField } from '../../components/searchField/SearchField';
import { GoodsList } from '../../components/goodsList/GoodsList';
import './HomePage.scss';

export const HomePage: React.FC = memo(() => {
  return (
    <div className="homePage">
      <SearchField />
      <GoodsList />
    </div>
  );
});
