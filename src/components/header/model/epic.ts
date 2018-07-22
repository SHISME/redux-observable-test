import {map, delay} from 'rxjs/operators';
import * as A from './actionTypes';
import { ActionsObservable,StateObservable, combineEpics } from 'redux-observable';

export const changeHeaderStateEpic = (action$:ActionsObservable<any>, state$:StateObservable<any>, dependencies:any) => {
    return action$.ofType(A.SEND_HEADER_MSG).pipe(
      delay(1000),
      map((data:any) => {
        console.warn('data', data);
        return {
          type:A.GET_MSG
        };
      })
    );
  };


export const headerEpics = combineEpics(changeHeaderStateEpic);