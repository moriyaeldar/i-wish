import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './routes';
import { AppHeader } from './cmps/app-header.jsx';

export class RootCmp extends React.Component {
  render() {
    return (
      <div className="RootCmp">
        <AppHeader />
        <main>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
                component={route.component}
                path={route.path}
              />
            ))}
          </Switch>
        </main>
      </div>
    );
  }
}
