import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const { greeting } = useSelector((state) => state);
  const [showGreting, setShowGreting] = useState('');

  useEffect(() => {
    setShowGreting(greeting);
  }, [greeting]);

  return (
    <div>
      <h1>hola</h1>
      <h2>{ showGreting }</h2>
    </div>
  );
};

export default HomeScreen;
