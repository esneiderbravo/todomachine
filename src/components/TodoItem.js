import React from "react";
import "../css/TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className={`TodoItem ${completed && "TodoItem-completed"}`}>
      <span
          className={`Icon Icon-check ${completed && "Icon-check--active"}`}
          onClick={onComplete}
      >
        <img src={process.env.PUBLIC_URL + '/images/completed_button.png'} alt=""/>
      </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <span className="Icon Icon-delete" onClick={onDelete}>
                <img src={process.env.PUBLIC_URL + '/images/close_button.png'} alt=""/>
      </span>
        </li>
    );
}

export { TodoItem };
