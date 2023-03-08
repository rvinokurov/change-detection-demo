import {effect, Effect} from "../../../../../../libs/angular-next/src/lib/effect";
import {ChangeDetectorRef, inject, ViewRef} from "@angular/core";

export function destroyableEffect(listener: () => void): Effect {
  const viewRef = inject(ChangeDetectorRef) as ViewRef;
  const f = effect(listener);

  viewRef.onDestroy(() => {
    f.destroy();
  });

  return f;
}
