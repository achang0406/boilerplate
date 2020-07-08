import React from 'react';
import { useDispatch } from 'react-redux';

import { getPersons } from 'Store/persons';

import Sample from './sample';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h1>App</h1>
      <button onClick={() => dispatch(getPersons())}>Get Persons</button>
      <p className="description">Library</p>

      <Sample />
    </div>
  );
};



export default App;
