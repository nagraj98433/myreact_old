// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// var React = require('react');     // This we do in NodeJS and we can use this

import React from 'react';  // This is ES6 concept in react we use ES6

//  We use React for writing 'HTML' in render method and,
//  Babel and web-pack we also get when we run this command in cmd 'npm creat-react-app' 

// var ReactDOM = require('react-dom');   // We use ReactDOM to access 'Dom Menipulation'//

import ReactDOM from 'react-dom';  // This is ES6 concept in react we use ES6 
// import App from './App'
import { Netflixcard, Searchfield, NetflixCards } from './Netflixcard'
import { cardDetails, amazon } from './cardDetails'
import './Netflixcard.css';
import Time from './digitalTime';
import Greet from './Greeting';
import TODoList from './ToDo_List';
import App from './slotMachinGame';



ReactDOM.render(
  <>
    <Time />
    <Searchfield />
    <div className="container"><NetflixCards /></div>
    <Greet />
    <TODoList />
    <App />
    {/* <NetflixCard myimgsource='https://wallpapercave.com/wp/wp4056410.jpg' title='A Netflix Original Series'
      seriesName='Dark' LinkURL='https://www.netflix.com/in/title/80100172?source=35' />
    <NetflixCard myimgsource='https://wallpapercave.com/wp/wp1917154.jpg' title='A Netflix Original Series'
      seriesName='Stranger Things' LinkURL='https://www.netflix.com/in/title/80057281?source=35' />
    <NetflixCard myimgsource='https://wallpapercave.com/wp/wp7418473.jpg' title='A Netflix Original Series'
      seriesName='Extra Curricular' LinkURL='https://www.netflix.com/in/title/80990668?source=35' />
    <NetflixCard myimgsource='https://wallpapercave.com/wp/wp1957872.jpg' title='A Netflix Original Series'
      seriesName='The Vampire Diaries' LinkURL='https://www.netflix.com/in/title/70143860?source=35' /> */}

  </>,
  document.getElementById('root'))
// We use render method to show HTML/JSX(javascriptxml) in 'root' element
// For multiple JSX(HTML ele.) you can use a 'Div' instead of '[]' and We use React.Fragment so that we shoud not get a extra div inside root div



//  We can also do the same above thing in simple way

// var ele = document.createElement('h1');

// ele.innerHTML = 'Hello React World in simple way';

// document.getElementById('root').append(ele);









