const CHANGE_NAME_TAG = "CHANGE_NAME_TAG";
const SET_DO_LIST_EL = "SET_DO_LIST_EL";
const DELETE_DO_LIST_EL = "DELETE_DO_LIST_EL";
const REWRITE_DO_LIST_EL = "REWRITE_DO_LIST_EL";
const SAVE_REWRITE_DO_LIST_EL = "SAVE_REWRITE_DO_LIST_EL";
const CHANGE_READY_DO_LIST_EL = "CHANGE_READY_DO_LIST_EL";
const DELETE_ALL_READY_DO_EL = "DELETE_ALL_READY_DO_EL";

let initialState = {
  isReWrite: false,
  reWriteID: null,
  id: 0,
  isReadyCounter: 0,
  readyList: [],
  nameTag: "",
  doList: [],
};
const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME_TAG:
      return {
        ...state,
        nameTag: action.nameTag,
      };
    case DELETE_DO_LIST_EL:
      let newDoList = state.doList.filter((doListEl) => {
        if (doListEl.id == action.id) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        nameTag: "",
        isReWrite: false,
        doList: newDoList,
      };
    case REWRITE_DO_LIST_EL:
      let oldEL = "";
      for (const doListEl of state.doList) {
        if (doListEl.id == action.id) {
          oldEL = doListEl.whatIsDo;
        }
      }
      return {
        ...state,
        reWriteID: action.id,
        isReWrite: true,
        nameTag: oldEL,
      };
    case SAVE_REWRITE_DO_LIST_EL:
      let oldTag = "";
      if (state.nameTag.trim() == "") {
        alert("Поле не может быть пустым");
        return {
          ...state,
          isReWrite: true,
          reWriteID: null,
          nameTag: oldTag,
        };
      }
      for (const doListEl of state.doList) {
        if (doListEl.id == state.reWriteID) {
          oldTag = doListEl.whatIsDo;
          doListEl.whatIsDo = state.nameTag;
        }
      }
      return {
        ...state,
        isReWrite: false,
        nameTag: "",
      };
    case CHANGE_READY_DO_LIST_EL:
      return {
        ...state,
        doList: state.doList.map(doListEl => {
            if (doListEl.id == action.id) {
                doListEl.isReady ? doListEl.isReady = false : doListEl.isReady = true
                return {...doListEl}
            }
            return {...doListEl}
        }),
        isReadyCounter: state.doList.filter(item=> item.isReady == true).length
      };
    case SET_DO_LIST_EL:
      if (state.nameTag.trim() == "") {
        alert("Поле не может быть пустым");
        break;
      }
      let newDo = {
        id: state.id++,
        whatIsDo: state.nameTag,
        isReady: false,
      };
      return {
        ...state,
        nameTag: "",
        doList: [...state.doList, newDo],
      };
    case DELETE_ALL_READY_DO_EL:
      let count = 0
      for (const iterator of state.doList) {
        if (iterator.isReady == true) {
          count++
        }
      }
      if (count == 0) {
        alert("Пока нет выполненных задач")
        return {
          ...state,
          isReadyCounter: 0
        }
      }
      return{
        ...state,
        doList: state.doList.filter(item => item.isReady != true),
        isReadyCounter: 0
      }
    default:
      return state;
  }
};

export const setNameTag = (nameTag) => {
  return {
    type: CHANGE_NAME_TAG,
    nameTag,
  };
};
export const setCompliteDoListEl = (id) => {
  return {
    type: CHANGE_READY_DO_LIST_EL,
    id
  };
};
export const setDoListElem = () => {
  return {
    type: SET_DO_LIST_EL,
  };
};
export const deleteDoListEl = (id) => {
  return {
    type: DELETE_DO_LIST_EL,
    id,
  };
};
export const rewriteDoListEl = (id) => {
  return {
    type: REWRITE_DO_LIST_EL,
    id,
  };
};
export const saveRewriteDoListEl = () => {
  return {
    type: SAVE_REWRITE_DO_LIST_EL,
  };
};
export const deleteAllReadyDoEl = () => {
  return {
    type: DELETE_ALL_READY_DO_EL,
  };
};

export default toDoReducer;
