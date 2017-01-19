import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {VoterComponent} from './voteComponent';
import {VoteTakerComponent} from './voteTakerComponent';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,VoterComponent,VoteTakerComponent
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
