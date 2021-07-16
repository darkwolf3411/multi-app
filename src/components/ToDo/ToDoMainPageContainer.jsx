import { connect } from "react-redux";
import { ToDoPageApp } from './ToDoMainPage';
import {
  setNameTag,
  setDoListElem,
  deleteDoListEl,
  rewriteDoListEl,
  saveRewriteDoListEl,
  setCompliteDoListEl,
  deleteAllReadyDoEl,
} from "../../redux/reducers/toDoReducer";

const mapStateToProps = (state) => {
  return {
    nameTag: state.todo.nameTag,
    doList: state.todo.doList,
    isReWrite: state.todo.isReWrite,
    isReadyCounter: state.todo.isReadyCounter,
  };
};
const mapDispatchToProps = {
  setNameTag,
  setDoListElem,
  deleteDoListEl,
  rewriteDoListEl,
  saveRewriteDoListEl,
  setCompliteDoListEl,
  deleteAllReadyDoEl,
};

export const ToDoPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoPageApp);
