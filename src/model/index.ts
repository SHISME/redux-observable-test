import { createStore,applyMiddleware, compose} from 'redux';
import { rootEpic } from './rootEpic';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducers } from './rootReducers';

const epicMiddleware = createEpicMiddleware({
  dependencies:{
    someDependence:() => {
      console.log('this is some dependence')
    },
  },
});



export const store = (()=>{
  const _store = createStore(
    rootReducers,
    compose(
      applyMiddleware(epicMiddleware),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()),
  );
  epicMiddleware.run(rootEpic as any);
  return _store;
})();
