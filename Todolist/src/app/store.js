 import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import {loadState, saveState} from "../utils/localStorage";
const persistedState=loadState();

 export const store =configureStore({
    reducer: 
    {
       todos: todoReducer
    },
    preloadedState: persistedState
 });

 store.subscribe(()=>{
   saveState({
      todos:store.getState().todos,
});
 });
