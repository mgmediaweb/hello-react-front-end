/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomeScreen from './routes/Home';

import { getGreetings } from './redux/connection';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return (
    <Router>
      <Routes>
        <Route index element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
