import React from 'react'


const ToDoList = (props) => {

  return <>
    <p>
      <i className="far fa-trash-alt delete" onClick={() => {
        props.onSelect(props.id)
      }}></i>
      <li>{props.text}</li>
    </p>
  </>
}
export default ToDoList