import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { bottomCarouselComponent } from './carousel/bottomcarousel.component';
import { bottomNavBarComponent } from './navigation/bottomnavbar.component';
import { topNavBarComponent } from './navigation/topnavbar.component';
import { newsCardsComponent } from './newsCards/newsCards.component';
import { shopBy1Component } from './shopByCards/shopBy1.component';



@NgModule({
  declarations: [
    AppComponent,
    bottomNavBarComponent,
    topNavBarComponent,
    bottomCarouselComponent,
    newsCardsComponent,
    shopBy1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
