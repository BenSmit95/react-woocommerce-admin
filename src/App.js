import React, { Component } from 'react';

import CreateWatch from './containers/pages/CreateWatch/CreateWatch';
import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <CreateWatch />
      </Layout>
    );
  }
}

export default App;
