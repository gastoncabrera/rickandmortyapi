import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import HelpUs from '../pages/HelpUs';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="rickandmortyapi/" component={HomePage} />
          <Route exact path="rickandmortyapi/about" component={About} />
          <Route exact path="rickandmortyapi/help-us" component={HelpUs} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
