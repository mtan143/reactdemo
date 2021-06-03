import React from 'react';
import Header from './components/Header';
import TodoFeatures from './features/Todo/index';
import AlbumFeature from './features/Album/index';
import { Route } from 'react-router';
import ProductFeature from './features/Product/index';
function App() {
  return (
    <div className="App">
      <Header />

      <Route path="/todos" component={TodoFeatures} />
      <Route path="/albums" component={AlbumFeature} />
      <Route path="/products" component={ProductFeature} />
    </div>
  );
}

export default App;
