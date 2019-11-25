import React from 'react';
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
function App() {
  return (
    <React.Fragment>
      <main>
        <Filter />
        <Shelf />
      </main>
      <FloatCart />
    </React.Fragment>
  );
}

export default App;
