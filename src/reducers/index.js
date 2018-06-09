import { combineReducers } from 'redux';
import * as recipes from './recipes';

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
      state = undefined
    }
  
      return appReducer(state, action)
    }
  
    const appReducer = combineReducers(Object.assign(recipes))

export default rootReducer;    