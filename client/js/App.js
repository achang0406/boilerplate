import React from 'react';
import { useDispatch } from 'react-redux';

import { getPersons } from './store/persons';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h1>App</h1>
      <button onClick={() => dispatch(getPersons())}>Get Persons</button>
      <p className="description">Library</p>
    </div>
  );
};



export default App;
