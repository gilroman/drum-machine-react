import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>DR 110 Drum Machine</h1>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
