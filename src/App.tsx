import React from 'react';
import Private from './components/private'
import Public from './components/public'
import { useSelector } from 'react-redux';
import { ReducerStateType } from './types/reducer';

function App() {

  const userReducer = useSelector((state: ReducerStateType) => state.user)

  if (userReducer.isLoggedIn) {
    return <Private />
  } else {
    return <Public />
  }
}

export default App;
