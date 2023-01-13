import React, { useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './ToDo_List.css';
import ToDoList from './TodoList'


const TODoList = () => {
  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState(['banana', 'orange', 'pineapple']);
  const [input_error, setinput_error] = useState(false);
  const itemEvent = (e) => {
    setinputList(e.target.value)
  }
  const listOfItems = () => {
    if (inputList == "") {
      setinput_error(!input_error)
    } else if (inputList == 'a') {
      setinput_error(input_error)
    }

    else {
      setitems((oldItems) => { return [...oldItems, inputList] })
      setinputList("")
    }
  }
  const DeleteItems = (id) => {
    setitems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      })
    })
  }


  return (
    <>
      <div className="TodoList_main_container">
        <div className="header">
          <h1>Make a List</h1>
        </div>
        <div className="TodoList_container">
          <div className="TodoList_header">
            <h1>ToDO List</h1>
          </div>
          <div className="inputField">
            <input type="text" name="text" placeholder="type here" required value={inputList} onInput={itemEvent} />
            <button type="submit" value="submit" className="btn" onClick={listOfItems}><i className="fas fa-plus"></i></button>
            <p className={input_error ? 'input_error' : 'input_error2'}>You did not type anything! type first!</p>
          </div>
          <div className="TodoItems_container">
            <div className="TodoItems">
              <ul>
                {items.map((Itemsval, index) => {
                  return <>
                    <ToDoList key={index}
                      id={index}
                      text={Itemsval}
                      onSelect={DeleteItems} />
                  </>
                })}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default TODoList;