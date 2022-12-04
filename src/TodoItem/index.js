import React from "react";
import './TodoItem.css'
import { AiFillCheckCircle } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            ><AiFillCheckCircle /></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            ><FiX /></span>
        </li>
    )
}

export { TodoItem };