import React from 'react';
import { useDispatch } from 'react-redux';

import { getPersons } from './store/persons';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getPersons());

  return (
    <div className="content">
      <h1>App</h1>
      <p className="description">Library</p>
    </div>
  );
};

export default App;
