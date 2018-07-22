export interface ISubject {
  alt:string;
  collect_count:number;
  id:string;
  images:{
    large:string;
    medium:string;
    small:string;
  };
  original_title:string;
  rating:{
    average:number;
    max:number;
    min:number;
    stars:string;
  };
  title:string;
  year:string;
};

export interface IDoubanState {
  count:number;
  total:number;
  title:string;
  start:number;
  subjects:ISubject[];
}

export const initDoubanState:IDoubanState = {
  count:20,
  total:0,
  title:'',
  start:0,
  subjects:[],
};