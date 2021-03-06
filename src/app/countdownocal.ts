import { Component }                from '@angular/core';
import { CountdownTimerComponent }  from './countDownTimerComponent';
@Component({
  selector: 'countdown-parent-lv',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>

  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  
  <countdown-timer #timer></countdown-timer>
  `
})
export class CountdownLocalVarParentComponent { }
