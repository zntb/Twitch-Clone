import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Channels } from './Channels';

export const Content = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="settings" element={<div>Settings</div>} />
        <Route path="channels" element={<Channels />} />
        <Route path="channel/:id" element={<div>Single Channel</div>} />
      </Routes>
    </div>
  );
};
