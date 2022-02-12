import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MensNewArrivalsLayoutComponent } from './routing/mens-new-arrivals-layout.component';
import { HomeLayoutComponent } from './routing/home-layout.component';
import { DroplistLayoutComponent } from './routing/droplist-layout.component';
import { CartLayoutComponent } from './routing/cart-layout.component';
import { OrderStatusLayoutComponent } from './routing/order-status-layout.component';
import { GiftCardLayoutComponent } from './routing/gift-card-layout.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path:'mens-new-and-popular-arrivals', component: MensNewArrivalsLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'droplist', component: DroplistLayoutComponent},
  {path: 'cart', component: CartLayoutComponent},
  {path: 'order-lookup', component: OrderStatusLayoutComponent},
  {path: 'gift-card', component: GiftCardLayoutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
