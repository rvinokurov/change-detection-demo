
import {
  ChangeDetectorRef,
  inject,
  InjectionToken,
  ViewRef,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import {effect, Effect} from "../../../shared/angular-next/src/lib/effect";

export function destroyableEffect(listener: () => void): Effect {
  const viewRef = inject(ChangeDetectorRef) as ViewRef;
  const f = effect(listener);

  viewRef.onDestroy(() => {
    f.destroy();
  });

  return f;
}

function createDestroyableStream(
  viewRef: ViewRef,
  stream$: Observable<unknown>,
  subscribe = false
): Observable<unknown> {
  const destroy$ = new Subject();

  viewRef.onDestroy(() => {
    destroy$.next(null);
    destroy$.complete();
  });

  const returnableStream$ = stream$.pipe(takeUntil(destroy$));

  if (subscribe) {
    returnableStream$.subscribe(() => {});
  }

  return returnableStream$;
}

export function destroyableStream(
  stream$: Observable<unknown>,
  subscribe = false
): Observable<unknown> {
  try {
    const viewRef = inject(ChangeDetectorRef) as ViewRef;
    return createDestroyableStream(viewRef, stream$, subscribe);
  } catch (e) {
    console.error(
      'destroyableStream must be used before ngOnInit, look error below:'
    );
    throw e;
  }
}

type DestroyableStreamFunction = (
  stream$: Observable<unknown>,
  subscribe: boolean
) => Observable<unknown>;

export function destroyableStreamFactory(): DestroyableStreamFunction {
  const viewRef = inject(ChangeDetectorRef) as ViewRef;

  return function (stream$: Observable<unknown>, subscribe = false) {
    return createDestroyableStream(viewRef, stream$, subscribe);
  };
}

export const DestroyableStream = new InjectionToken<{create: () => DestroyableStreamFunction}>(
  'destroyable stream factory token',
  {
    factory: function () {
      return { create: destroyableStreamFactory };
    },
  }
);
