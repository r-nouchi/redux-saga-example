import React from 'react';
import SampleContainer from './container/sampleContainer';
import SelectionContainer from './container/selectionContainer';

function App() {
  return (
    <div className="App">
      <h2>redux-saga sample</h2>
      <SampleContainer />
      <SelectionContainer />
    </div>
  );
}

export default App;
