import { ISubject } from './state';

export interface GetTop250MovieFromDoubanPayload {
  count:number;
  subjects:ISubject[];
  total:number;
  title:string;
}

export interface FetchTop250MovieFromDoubanPayload {
  start:number;
  count:number;
}

export const  GET_TOP_250_MOVIE_FROM_DOUBAN = 'GET_TOP_250_MOVIE_FROM_DOUBAN';
export const FETCH_TOP_250_MOVIE_FROM_DOUBAN = 'FETCH_TOP_250_MOVIE_FROM_DOUBAN';
