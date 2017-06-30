import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Reserve from './routes/Reserve';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/index" component={IndexPage} />
      <Route path="/" component={Reserve} />
    </Router>
  );
}

export default RouterConfig;

