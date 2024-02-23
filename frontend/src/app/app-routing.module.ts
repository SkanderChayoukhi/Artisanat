import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProduitsComponent } from './produits/produits.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { StoreComponent } from './store/store.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { CartService } from './services/shppingCart.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from './footer/footer.component';
import { MyproductComponent } from './myproduct/myproduct.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CartComponent } from './cart/cart.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';





const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: FooterComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'store', component: StoreComponent },
  { path: 'search/:searchTerm', component: StoreComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'shops', component: ShoppingCardComponent },
  { path: 'abc', component: NotFoundComponent },
  { path: 'message/:id', component: MessagesComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'myproduct', component: MyproductComponent },
  { path: 'favourite', component: FavouriteComponent },
  {path:'cart',component:CartComponent},
  {path:'cart-dialog',component:CartDialogComponent},


 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CartService]
})
export class AppRoutingModule { }
