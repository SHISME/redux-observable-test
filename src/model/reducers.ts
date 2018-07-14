import { Action, handleActions } from 'redux-actions';
import * as A from './actionTypes';
import {IAppState, initAppState} from './state';

export interface IStartAppPayload {
    is_running:boolean;
}

function reducerStartApp(
    state:IAppState,
    action:Action<IStartAppPayload>
):IAppState {
    const { payload } = action;
    if (!payload) {
        return state;
    }
    return {
        ...state,
        appIsRunning:payload.is_running,
    };
}

export const reducers = handleActions<IAppState, any>({
    [A.START_APP]:reducerStartApp,
}, initAppState);