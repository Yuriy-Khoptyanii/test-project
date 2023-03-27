/* eslint-disable no-console */
import React, { memo, useState } from 'react';

import { SearchField } from '../../components/searchField/SearchField';
import { GoodsList } from '../../components/goodsList/GoodsList';
import './HomePage.scss';

export const HomePage: React.FC = memo(() => {
  const [nameSearch, setNameSearch] = useState('');

  const setNameChange = (value: string) => {
    console.log({ value });
    setNameSearch(value);
  };

  return (
    <div className="homePage">
      <SearchField nameSearch={nameSearch} setNameChange={setNameChange} />
      <GoodsList nameSearch={nameSearch} />
    </div>
  );
});
