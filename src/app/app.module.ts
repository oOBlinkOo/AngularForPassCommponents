import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {VoterComponent} from './voteComponent';
import {VoteTakerComponent} from './voteTakerComponent';
import {CountdownTimerComponent} from './countDownTimerComponent';
import {CountdownLocalVarParentComponent} from './countdownocal';
import {CountdownViewChildParentComponent} from  './countviewChildParentComponent';
import {MissionService} from './mission.service';
import {MissionControlComponent} from './misionComponent';
import {AstronautComponent} from './astronaut.componet';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,VoterComponent,VoteTakerComponent,CountdownTimerComponent,
    CountdownLocalVarParentComponent,CountdownViewChildParentComponent,
    AstronautComponent,MissionControlComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
