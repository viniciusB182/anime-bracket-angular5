import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnimeService } from '../providers/anime-service';
import { MainBracketComponent } from '../components/main-bracket/main-bracket.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MainBracketComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    AnimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
