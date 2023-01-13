import React from 'react';
import './Netflixcard.css';
import { useState } from 'react';
import { cardDetails, amazon } from './cardDetails'



const Searchfield = () => {
  const [input, setInput] = useState('amazon');

  return (
    <div className="searchfield">
      <input type="text" name="seach" placeholder="Type Amazon" value={input} onInput={(e) => setInput(e.target.value)} className="form-control sm" />
      <button type="button" className="mybtn btn-primary" onClick={()=>{NetflixCards(input)}}>Click</button>
    </div>)
}



const Netflixcard = (props) => {
  return (
    <div className='cards' key={props.id}>
      <div className='card'>
        <img src={props.myimgsource} alt='mypic' className='card_img' />
        <div className='card_info'>
          <span className='card_category'>{props.title}</span>
          <h3 className='card_title'>{props.seriesName}</h3>
          <button><a href={props.LinkURL} target='_blank'>Watch Now</a></button>
        </div>
      </div>
    </div>
  )
}


function NetflixCards(val) {
  const Netflix = val;
  console.log(Netflix)
  if (Netflix == 'amazon') {
    return ( amazon.map((val) => {
      return (
        <Netflixcard key={val.id}
          myimgsource={val.myimgsource}
          title={val.title}
          seriesName={val.seriesName}
          LinkURL={val.LinkURL}
        />
      )
    })
    )
  } else {
    return (
      cardDetails.map((val) => {
        return (
          <Netflixcard key={val.id}
            myimgsource={val.myimgsource}
            title={val.title}
            seriesName={val.seriesName}
            LinkURL={val.LinkURL}
          />
        )
      })
    )
  }
}

export { Netflixcard, Searchfield, NetflixCards};






