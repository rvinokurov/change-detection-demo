import {Observable} from 'rxjs';
import {signal} from '../signal';

export function toSignal<T>(input: Observable<T>, defaultValue?: T) {
  const value = signal(defaultValue as T);
  const subscription = input.subscribe(value.set);

  // что то такое явно будет под капотом фреймворка
  /*
  const viewRef = inject(ChangeDetectorRef) as ViewRef;
  viewRef.onDestroy(() => {
    subscription.unsubscribe();
  });
  */

  return value;
}
