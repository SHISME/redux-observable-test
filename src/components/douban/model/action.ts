import { createAction } from 'redux-actions';
import * as A from './actionTypes';

export const action_fetch_top_250_movie_from_douban = createAction<A.FetchTop250MovieFromDoubanPayload>(A.FETCH_TOP_250_MOVIE_FROM_DOUBAN);