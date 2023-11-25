import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const Content = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="settings" element={<div>Settings</div>} />
        <Route path="channels" element={<div>Channels</div>} />
        <Route path="channel/:id" element={<div>Single Channel</div>} />
      </Routes>
    </div>
  );
};
