import { createAction } from 'redux-actions';
import * as A from './actionTypes';

export const action_fetch_top_250_movie_from_douban = createAction<A.FetchTop250MovieFromDoubanPayload>(A.FETCH_TOP_250_MOVIE_FROM_DOUBAN);
export const action_get_file_info = createAction<A.GetFileInfoPayload>(A.GET_FILE_INFO);