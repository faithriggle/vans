import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bottomNavBarComponent } from 'src/navigation/bottomnavbar.component';
import { topNavBarComponent } from 'src/navigation/topnavbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    topNavBarComponent,
    bottomNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
