import { Action, handleActions } from 'redux-actions';
import * as A from './actionTypes';
import {IHeaderState, initHeaderState} from './state';

export interface ISendHeaderMsgPayload {
  msg?:string;
}

function reducerStartApp(
  state:IHeaderState,
  action:Action<ISendHeaderMsgPayload>
):IHeaderState {
  const { payload } = action;
  if (!payload) {
    return state;
  }
  return {
    ...state,
    msg:payload.msg,
  };
}

export const headerReducers = handleActions<IHeaderState, any>({
  [A.SEND_HEADER_MSG]:reducerStartApp,
}, initHeaderState);