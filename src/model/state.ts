export interface IAppState {
  appIsRunning:boolean,
  currentPanel:string,
}

export const initAppState:IAppState = {
  appIsRunning:false,
  currentPanel:'index',
};