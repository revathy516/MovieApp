import { ofType } from 'redux-observable';
import { from, forkJoin, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { API_KEY, BASE_URL } from '../../constants';
import { saveMoviesToStorage, getMoviesFromStorage } from '../../utils/storage';

export const movieEpics = (action$) =>
  action$.pipe(
    ofType(LOAD_MOVIES),
    mergeMap(() =>
      from(getMoviesFromStorage()).pipe(
        mergeMap((cachedMovies) => {
          const offlineAction = cachedMovies
            ? of(loadMoviesSuccess(cachedMovies))
            : of();

          const fetchPopular = axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
          const fetchUpcoming = axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);

          const fetchAction = forkJoin([fetchPopular, fetchUpcoming]).pipe(
            mergeMap(([popularResponse, upcomingResponse]) => {
              const allMovies = {
                popular: popularResponse.data.results,
                upcoming: upcomingResponse.data.results,
              };

              saveMoviesToStorage(allMovies);
              return of(loadMoviesSuccess(allMovies));
            }),
            catchError((error) => of(loadMoviesFailure(error.message)))
          );

          return offlineAction.pipe(mergeMap(() => fetchAction));
        }),
        catchError(() => of(loadMoviesFailure('Failed to load cached movies')))
      )
    )
  );
