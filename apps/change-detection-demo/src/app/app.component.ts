import {RouterModule} from '@angular/router';
import {Component, NgZone} from '@angular/core';
import {SourceCodeTooltipComponent} from './components/source-code-tooltip/source-code-tooltip.component';

@Component({
  standalone: true,
  imports: [RouterModule, SourceCodeTooltipComponent],
  selector: 'change-detection-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'change-detection-demo';

  protected logOptions() {
    return [
      `color: white`,
      `background: gray`,
      `padding: 2px 10px 2px 10px`,
      `margin: 20px 10px`,
      'font-weight: 600',
      'border-radius: 3px',
    ];
  }

  protected log(message: string) {
    console.log(`%c-> ${message}`, this.logOptions().join(';'));
  }

  constructor(private readonly ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.log('Zone stable');
    });

    this.ngZone.onUnstable.subscribe(() => {
      this.log('Zone unstable');
    });
  }
}
