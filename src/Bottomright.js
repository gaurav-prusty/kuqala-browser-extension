import React, { useContext, useState } from 'react';
import { ListContext } from './ListContext';
import TodoItem from './TodoItem';

function Bottomright() {

    let {items} = useContext(ListContext);              //array to store todo list items

    let [showList, setShowList] = useState(false);      //state to toggle appearance of list
    let [listItem, setListItem] = useState("");         //state to intermediary storage todo list item 

    //add item to todo list
    function addItem() {
        if (listItem === "") {
            alert("Add a task!");
        } else {
            items.push(listItem);
            setListItem("");
        }
    }

    return (
        <div>
            <div className='bottom-right'>
                <div className='todo'>
                    <p onClick={()=> setShowList(prev=> !prev)}>TODO</p>
                </div>
            </div>

            <div className='todo-list' style={{display: showList ? "block" : "none"}}>
                <p className='todo-list-title'>Today</p>

                <svg onClick={()=> setShowList(prev=> !prev)} className='todo-list-minus' xmlns="http://www.w3.org/2000/svg" width="28" height="32" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/> </svg>

                {items.map((item, index)=> <TodoItem key={index} id={index} item={item} />)}

                <div className='add-item'>
                    <input onChange={(event)=> setListItem(event.target.value)} className='add-item-input' type="text" placeholder='Add item...' value={listItem}/>
                    <div onClick={addItem} className='add-btn'>Add</div>
                </div>
            </div>
        </div>       
)}

export default Bottomright