import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateWatch from './containers/pages/CreateWatch/CreateWatch';
import Layout from './containers/Layout/Layout';
import WatchOverview from './containers/pages/WatchOverview/WatchOverview';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/watch/create" component={CreateWatch} />
          <Route path="/watch/list" component={WatchOverview} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
