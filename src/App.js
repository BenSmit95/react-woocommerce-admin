import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateWatch from './containers/pages/CreateWatch/CreateWatch';
import Layout from './containers/Layout/Layout';
import WatchOverview from './containers/pages/WatchOverview/WatchOverview';
import EditWatch from './containers/pages/EditWatch/EditWatch';
import CreateJewelry from './containers/pages/CreateJewelry/CreateJewelry';
import JewelryOverview from './containers/pages/JewelryOverview/JewelryOverview';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/watch/create" component={CreateWatch} />
          <Route path="/watch/list" component={WatchOverview} />
          <Route path="/watch/edit/:id" component={EditWatch} />
          <Route path="/jewelry/create" component={CreateJewelry} />
          <Route path="/jewelry/list" component={JewelryOverview} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
