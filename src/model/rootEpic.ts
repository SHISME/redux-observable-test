import { combineEpics } from 'redux-observable';
import { headerEpics } from '../components/header/model/epic';
import { doubanEpics } from '../components/douban/model/epic';

export const rootEpic = combineEpics(
  headerEpics,
  doubanEpics,
);