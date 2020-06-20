import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../routes/Home';
import Category from '../routes/Category';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import '../index.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
