import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { bottomCarouselComponent } from './carousel/bottomcarousel.component';
import { bottomNavBarComponent } from './navigation/bottomnavbar.component';
import { topNavBarComponent } from './navigation/topnavbar.component';
import { newsCardsComponent } from './newsCards/newsCards.component';
import { shopBy1Component } from './shopByCards/shopBy1.component';
import { AppRoutingModule } from './app-routing.module';
import { MensNewArrivalsLayoutComponent } from './routing/mens-new-arrivals-layout.component';
import { HomeLayoutComponent } from './routing/home-layout.component';
import { DroplistLayoutComponent } from './routing/droplist-layout.component';
import { CartLayoutComponent } from './routing/cart-layout.component';
import { OrderStatusLayoutComponent } from './routing/order-status-layout.component';
import { GiftCardLayoutComponent } from './routing/gift-card-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    bottomNavBarComponent,
    topNavBarComponent,
    bottomCarouselComponent,
    newsCardsComponent,
    shopBy1Component,
    MensNewArrivalsLayoutComponent,
    HomeLayoutComponent,
    DroplistLayoutComponent,
    CartLayoutComponent,
    OrderStatusLayoutComponent,
    GiftCardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
