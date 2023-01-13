import React, { useState } from 'react';

const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setctime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setctime(time)
  }
  // setInterval(updateTime, 1000);
  return (
    <>
      <div className='time'>
        <h1>{ctime}</h1>
      </div>
    </>
  )
};


export default Time;