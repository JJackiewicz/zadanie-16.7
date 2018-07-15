import React from 'react';
import style from './TodoList.css';


    const TodoList = props => {
    const listElements = props.list.map(element => 
    <li key={element.id} onClick={() => {props.remove(element.id)}}>{element.text}</li>)
    return (
      <ul className={style.TodoList}>{listElements}</ul>
    )
}
export default TodoList; 