import { headerReducers } from '../components/header/model/reducers';
import { doubanReducers } from '../components/douban/model/reducers';
import {combineReducers} from "redux";
export const rootReducers = combineReducers({
  headerState:headerReducers,
  doubanState:doubanReducers,
});