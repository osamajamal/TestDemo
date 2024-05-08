/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import homeReducer from './home';
import {combineReducers} from 'redux';


const combineRed: any = combineReducers({
  home: homeReducer,
});

const rootReducer = (state: any, action: any) => {
 
  return combineRed(state, action);
};
export default rootReducer;
