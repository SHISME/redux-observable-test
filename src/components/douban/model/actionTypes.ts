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

export interface GetFileInfoPayload {
  file_name:string;
}

export const GET_FILE_INFO = 'GET_FILE_INFO';
export const GET_FILE_INFO_SUCCEED = 'GET_FILE_INFO_SUCCEED';
export const  GET_TOP_250_MOVIE_FROM_DOUBAN = 'GET_TOP_250_MOVIE_FROM_DOUBAN';
export const FETCH_TOP_250_MOVIE_FROM_DOUBAN = 'FETCH_TOP_250_MOVIE_FROM_DOUBAN';
