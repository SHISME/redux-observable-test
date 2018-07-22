import { Action, handleActions } from 'redux-actions';
import * as A from './actionTypes';
import { IDoubanState, initDoubanState } from './state';

function get_top_250_movie_from_douban(
  state:IDoubanState,
  action:Action<A.GetTop250MovieFromDoubanPayload>,
) {
  const { payload } = action;
  return {
    ...state,
    ...payload,
  };
}

export const doubanReducers = handleActions<IDoubanState>({
  [A.GET_TOP_250_MOVIE_FROM_DOUBAN]:get_top_250_movie_from_douban,
}, initDoubanState);
