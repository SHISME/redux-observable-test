import { action_fetch_top_250_movie_from_douban } from '../model/action';
import * as A from '../model/actionTypes';
import { getTop250MovieFromDoubanEpic } from '../model/epic';
import { ActionsObservable } from 'redux-observable';

describe('testAsyncEpic', () => {

  it('my test', () => {
    const action$ = ActionsObservable.of(action_fetch_top_250_movie_from_douban({
      start:0,
      count:10,
    }));

    return getTop250MovieFromDoubanEpic(action$)
      .toPromise()
      .then((actionReceived:any) => {
      expect(actionReceived.type).toBe(A.GET_TOP_250_MOVIE_FROM_DOUBAN)
    });

  });
});
