import {combineEpics, ofType} from 'redux-observable';
import {mergeMap, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {ajax} from 'rxjs/ajax';
import * as A from './actionTypes';

export const getTop250MovieFromDoubanEpic = (action$: Observable<any>) => {
  return action$.pipe(
    ofType(A.FETCH_TOP_250_MOVIE_FROM_DOUBAN),
    mergeMap(({payload}: { payload: A.FetchTop250MovieFromDoubanPayload }) => {
        return ajax.getJSON('http://localhost:3000/movie/top250?count=' + payload.count + '&start=' + payload.start)
          .pipe(
            map((result: any) => {
              const subjectData = result.subjects.map((item: any) => {
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
      },
    ),
  );
};

export const doubanEpics = combineEpics(
  getTop250MovieFromDoubanEpic,
);