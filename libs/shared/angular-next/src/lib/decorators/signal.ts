import {isSignal} from '../api';
import {signal} from '../signal';

export function SignalInput() {
  const signalSymbol = Symbol();

  return function (target: any, key: PropertyKey) {
    Object.defineProperty(target, key, {
      set: function (value) {
        if (!this[signalSymbol]) {
          this[signalSymbol] = isSignal(value) ? value : signal(value);
          return;
        }

        if (!isSignal(value)) {
          this[signalSymbol].set(value);
        }
      },

      get: function () {
        return this[signalSymbol];
      },
    });
  };
}

export function SignalWithUndefined() {
  const signalSymbol = Symbol();

  return function (target: any, key: PropertyKey) {
    Object.defineProperty(target, key, {
      set: function (value) {
        if (!this[signalSymbol]) {
          this[signalSymbol] = isSignal(value) ? value : signal(value);
          return;
        }

        if (!isSignal(value)) {
          this[signalSymbol].set(value);
        }
      },

      get: function () {
        if (!this[signalSymbol]) {
          this[signalSymbol] = signal(undefined);
        }

        return this[signalSymbol];
      },
    });
  };
}
