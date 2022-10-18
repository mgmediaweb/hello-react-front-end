import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from './redux/greetings/greetings';

export default function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  return (
    <>
      <h1>Greeting</h1>
      <p>{greeting}</p>
    </>
  )
}
