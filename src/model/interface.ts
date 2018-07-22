import { IHeaderState } from '../components/header/model/state';
import { IDoubanState } from '../components/douban/model/state';

export interface IRootState {
  headerState:IHeaderState,
  doubanState:IDoubanState,
}