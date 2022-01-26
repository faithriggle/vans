import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { bottomNavBarComponent } from './navigation/bottomnavbar.component';
import { topNavBarComponent } from './navigation/topnavbar.component';



@NgModule({
  declarations: [
    AppComponent,
    bottomNavBarComponent,
    topNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
