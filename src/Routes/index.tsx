import React, { lazy, memo, Suspense } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';

const Periods = lazy(() => import('pages/Periods'));
const Result = lazy(() => import('pages/Result'));
const Values = lazy(() => import('pages/Values'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback="loading...">
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/valores" element={<Values />} />
          <Route path="/periodos" element={<Periods />} />
          <Route path="/resultados" element={<Result />} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default memo(Routes);
