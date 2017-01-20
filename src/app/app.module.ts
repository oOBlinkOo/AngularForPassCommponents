import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {VoterComponent} from './voteComponent';
import {VoteTakerComponent} from './voteTakerComponent';
import {CountdownTimerComponent} from './countDownTimerComponent';
import {CountdownLocalVarParentComponent} from './countdownocal';
import {CountdownViewChildParentComponent} from  './countviewChildParentComponent';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,VoterComponent,VoteTakerComponent,CountdownTimerComponent,CountdownLocalVarParentComponent,CountdownViewChildParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
