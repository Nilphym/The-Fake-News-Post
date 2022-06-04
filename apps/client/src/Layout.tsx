import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <div>Nawigacja</div>
      <div>
        <div>Instrukcja / Lewy panel</div>
        <Outlet />
        <div>Autorzy + Rozgrywka / Prawy panel</div>
      </div>
    </div>
  );
};
