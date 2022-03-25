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
import { MTELayoutComponent } from './routing/mte-layout.component';
import { MTEShopCardsComponent } from './MTEComponents/MTE-shop-cards.component';
import { MTEBlack_WhiteComponent } from './MTEComponents/MTE-b&w.component';
import { MTEMainComponent } from './MTEComponents/MTE-main.component';
import { mensTopComponent } from './mensNewArrivals/top.component';
import { MensCategoriesComponent } from './mensNewArrivals/mens-categories.component';
import { ProductCardComponent } from './mensNewArrivals/productCards/productCard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';

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
    GiftCardLayoutComponent,
    MTELayoutComponent,
    MTEShopCardsComponent,
    MTEBlack_WhiteComponent,
    MTEMainComponent,
    mensTopComponent,
    MensCategoriesComponent,
    ProductCardComponent,
    UserInfoComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideDatabase(() => getDatabase()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
