import { createStore, combineReducers } from 'redux';
import { reducers } from './reducers';
import { IAppState } from './state';
import { headerReducers } from '../components/header/model/reducers';
import { IHeaderState } from '../components/header/model/state';

export interface IMyReducers {
  appState:IAppState,
  headerState:IHeaderState,
}

export const store:IMyReducers = createStore(combineReducers({
  appState:reducers,
  headerState:headerReducers,
}));
