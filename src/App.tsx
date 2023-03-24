import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
