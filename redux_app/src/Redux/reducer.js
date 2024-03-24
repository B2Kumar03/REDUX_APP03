import { combineReducers } from "redux";

export const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
};
export const initialStateToDo = {
  isLoading: false,
  isError: false,
  todoData: [],
};

const footballreducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADER":
      return { ...state, isLoading: action.payload };
    case "ERROR":
      return { ...state, isError: action.payload };
    case "DATA":
      return { ...state, footballMatches: action.payload };
    default:
      return state;
  }
};
const todoReducer = (state = initialStateToDo, action) => {
  switch (action.type) {
    case "LOADER":
      return { ...state, isLoading: action.payload };
    case "ERROR":
      return { ...state, isError: action.payload };
    case "DATA":
      return { ...state, todoData: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  footballreducer: footballreducer,
  todoReducer: todoReducer,
});

export default rootReducer;
