import React from 'react'
import './slotMachinGame.css';


const Slot = (props) => {

  // let x = props.x;
  // let y = props.y;
  // let z = props.z;


  let { x, y, z } = props
  console.log(props)

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>{x} {y} {z}</h1>
          <h1>This is Matching.</h1>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>{x} {y} {z}</h1>
          <h1>This is not Matching.</h1>
        </div>
      </>
    )
  }

}


const App = () => {
  return (
    <>
      <div className="slotmachin">
        <h2>🎰 Welcome to <span>SLOT MACHINE GAME</span>🎰</h2>
      </div>
      <div className="slot_container">
        <Slot x="😊" y="😊" z="😊" />
        <Slot x='😠' y="😆" z="😠" />
        <Slot x="🍎" y="🍌" z="🍎" />
        <Slot x="💑" y="💑" z="💑" />
      </div>

    </>
  )
}

export default App;






