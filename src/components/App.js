import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../routes/Home';
import Category from '../routes/Category';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'tachyons/css/tachyons.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '../index.css';
import ScrollToTop from './ScrollToTop';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:category/:page" component={Category} />
          <Redirect from="/today" to="/" />
          <Redirect from="/:category" to="/:category/1" />
        </Switch>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}
