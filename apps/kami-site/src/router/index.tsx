import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { DashboardView } from '../components/pages/dashboard/views/DashboardView';

function Router() {
  return (
    <Routes>
      <Route index element={<DashboardView />} />
    </Routes>
  );
}

export { Router };
