import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import cn from 'classnames';

export const Header: React.FC = memo(() => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => cn('link__item', {
            'is-active': isActive,
          })}
        >
          Home Page
        </NavLink>

        <NavLink
          to="addNewGoods"
          className={({ isActive }) => cn('link__item', {
            'is-active': isActive,
          })}
        >
          Add goods
        </NavLink>
      </nav>
    </header>
  );
});
