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

function get_my_file_info_succeed(
  state:IDoubanState,
  action:Action<any>,
) {
  const { payload } = action;
  return {
    ...state,
    file_content:payload,
  };
}

export const doubanReducers = handleActions<IDoubanState>({
  [A.GET_TOP_250_MOVIE_FROM_DOUBAN]:get_top_250_movie_from_douban,
  [A.GET_FILE_INFO_SUCCEED]:get_my_file_info_succeed,
}, initDoubanState);
