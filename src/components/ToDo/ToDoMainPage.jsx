import React from "react";
import rewriteIcon from "../../source/icons8-edit.svg";
import deleteIcon from "../../source/icons8-delete.svg";
import "./ToDoMainPage.css";

export const ToDoPageApp = (props) => {
  const changeNameTage = (value) => {
    props.setNameTag(value);
  };
  const setCompliteDoListEl = (id) => {
    props.setCompliteDoListEl(id);
  };
  return (
    <div className="ToDo-Wrapper">
      <input
        className="form__field"
        placeholder="Введите вашу задачу сюда"
        name="name"
        autocomplete="off"
        id="name"
        type="input"
        onChange={(e) => changeNameTage(e.target.value)}
        value={props.nameTag}
      />
      {!props.isReWrite ? (
        <button onClick={props.setDoListElem}> add </button>
      ) : (
        <button onClick={props.saveRewriteDoListEl}> save </button>
      )}
      <div className="todo-list">
        {props.doList.map((el) => (
          <div key={el.id} timeout={500} className="item">
            <span
              className={el.isReady ? "DoElSpan__isReady" : "DoElSpan"}
              id={el.id}
            >
              {el.whatIsDo}
            </span>
            <div className="doEl__buttons-wrapper">
              <img
                onClick={(e) => props.rewriteDoListEl(e.target.id)}
                id={el.id}
                src={rewriteIcon}
                alt=""
              />
              <img
                onClick={(e) => props.deleteDoListEl(e.target.id)}
                id={el.id}
                src={deleteIcon}
                alt=""
              />
            </div>
            <input
              className="chekDoEl"
              onChange={(e) => setCompliteDoListEl(e.target.id)}
              checked={el.isReady}
              type="checkbox"
              name=""
              id={el.id}
            />
          </div>
        ))}
      </div>
      {props.isReadyCounter > 2 ? (
        <button
          onClick={props.deleteAllReadyDoEl}
          className="sub-todo-list-button"
        >
          Убрать выполненные
        </button>
      ) : null}
    </div>
  );
};
