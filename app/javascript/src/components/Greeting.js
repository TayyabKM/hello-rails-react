import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, isLoading } = useSelector((store) => store.greeting);
  console.log(message)

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Greeting</h1>
      {isLoading && <h1>Loading...</h1>}
      { message && <h1>{message}</h1>}

    </div>
  );
};

export default Greeting;
