// @ts-ignore

import type { Subscription } from 'rxjs';
import { effect } from '@demo/angular-next';

export function Effect(): any {
  return function InnerFunction(
    targetClass: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ): any {

    console.log(targetClass, key, descriptor);
    // @ts-ignore
    targetClass.ɵEffects = targetClass.ɵEffects || [];

    // @ts-ignore
    const method = targetClass[key];

    // @ts-ignore
    targetClass.ɵEffects.push(effect(() => method()));

    // @ts-ignore
    const onDestroy =
      // @ts-ignore
      typeof targetClass.onDestroy === 'function'
        // @ts-ignore
        ? targetClass.onDestroy
        : () => {};

    // @ts-ignore
    targetClass.onDestroy = () => {
      // @ts-ignore
      this.ɵEffects.forEach((effect) => {
        effect.destroy();
      });

      onDestroy();
    };

    return descriptor;
  };
}
