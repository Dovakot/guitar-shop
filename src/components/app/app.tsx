import React from 'react';
import {Switch, Route, Redirect, Router as BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {AppRoute, NavLinkTitle, DEFAULT_PAGE_PATH} from '../../const';
import browserHistory from '../../browser-history';

import BasePage from '../base-page/base-page';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route path={AppRoute.Root} exact>
            <Redirect to={DEFAULT_PAGE_PATH} />
          </Route>

          <Route path={AppRoute.Catalog} exact>
            <Main isBreadcrumbs />
          </Route>

          <Route path={AppRoute.Guitar} exact>
            <BasePage title="Ваша гитара" />
          </Route>

          <Route path={AppRoute.Cart} exact>
            <BasePage title={NavLinkTitle.Cart} />
          </Route>

          <Route path={AppRoute.Stores} exact>
            <BasePage title={NavLinkTitle.Stores} />
          </Route>

          <Route path={AppRoute.Blog} exact>
            <BasePage title={NavLinkTitle.Blog} />
          </Route>

          <Route path={AppRoute.Faq} exact>
            <BasePage title={NavLinkTitle.Faq} />
          </Route>

          <Route path={AppRoute.Return} exact>
            <BasePage title={NavLinkTitle.Return} />
          </Route>

          <Route path={AppRoute.Rehab} exact>
            <BasePage title={NavLinkTitle.Rehab} />
          </Route>

          <Route path={AppRoute.About} exact>
            <BasePage title={NavLinkTitle.About} />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
