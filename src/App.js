import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [fullname, setFullName] = useState('')
  const [age, setAge] = useState(0)
  const [currentTime, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(interval)
    };
  }, []);
  return (
    <React.Fragment>
      <h1>{`Hello React World ${fullname}`} {age}</h1>
      <h1 className='tag'>Hello React World again Tekno Point </h1>
      <h1 style={{ color: 'blue' }}>React CSS</h1>
      <a href='https://www.google.com/' target='_blank'>Google.com</a>
      <img src='https://picsum.photos/200/300' alt='A random img' />
      <p>{`Current Time is :${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`}</p>
      <p>{`Current Date is :${Date.now()}`}</p>
    </React.Fragment>
  );
}


export default App;
