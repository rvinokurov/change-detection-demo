import { Observable } from 'rxjs';
import { Signal } from '../api';
import { effect } from '../effect';
import { untrack } from '../untrack';

export function toObservable<T>(input: Signal<T>): Observable<T> {
  return new Observable<T>((observer) => {
    const e = effect(() => {
      const value = input();
      untrack(() => observer.next(value));
    });

    return () => {
      e.destroy();
    };
  });
}
