import {ActionsObservable, combineEpics} from 'redux-observable';
import {mergeMap, map} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import * as A from './actionTypes';
import {ISubject} from './state';


export const getTop250MovieFromDoubanEpic = (action$: ActionsObservable<any>) => {
  return action$.ofType(A.FETCH_TOP_250_MOVIE_FROM_DOUBAN).pipe(
    mergeMap(({payload}: { payload: A.FetchTop250MovieFromDoubanPayload }) => {
        return ajax.getJSON('/movie/top250?count=' + payload.count + '&start=' + payload.start).pipe(
          map((result: any) => {
            let subjectData: ISubject[] = [];
            subjectData = result.subjects.map((item: any) => {
              return {
                alt: item.alt,
                collect_count: item.collect_count,
                id: item.id,
                images: {
                  large: item.images.large,
                  medium: item.images.medium,
                  small: item.images.small,
                },
                original_title: item.original_title,
                rating: {
                  average: item.rating.average,
                  max: item.rating.max,
                  min: item.rating.min,
                  stars: item.rating.stars,
                },
                title: item.title,
                year: item.year,
              };
            });
            return {
              type: A.GET_TOP_250_MOVIE_FROM_DOUBAN,
              payload:{
                total:result.total,
                title:result.title,
                count:result.count,
                subjects:subjectData,
              }
            };
          })
        )
      }
    ),
  );
};

export const doubanEpics = combineEpics(getTop250MovieFromDoubanEpic);