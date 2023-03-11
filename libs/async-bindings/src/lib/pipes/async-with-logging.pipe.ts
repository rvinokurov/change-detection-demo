import {Pipe} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable, Subscribable} from 'rxjs';

@Pipe({ name: 'asyncWithLogging', standalone: true, pure: false })
export class AsyncWithLoggingPipe extends AsyncPipe {

  private backgroundColor = '#f63535';


  protected logOptions() {
    return [
      `color: white`,
      `background: ${this.backgroundColor}`,
      `padding: 2px 10px 2px 10px`,
      'font-weight: 600',
      'border-radius: 3px'
    ];
  }

  protected log(message: string) {
    console.log(`%c-> ${message}`, this.logOptions().join(';'))
  }

  override transform<T>(
    obj: Observable<T> | Subscribable<T> | Promise<T> | null | undefined,
    name?: string
  ): T | null {
    this.log(`run async pipe for #${name}`);
    return super.transform(obj);
  }
}
