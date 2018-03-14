import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { appComponent } from './app.component';
import { productlistComponent } from './Product/product-list.component';
import { ConvertToSpace } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductDetailsComponent } from './Product/productdetails.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    appComponent,
    productlistComponent,
    ConvertToSpace,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component:productlistComponent},
      {path: 'products/:id',component:ProductDetailsComponent},
      {path :'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'},
      {path:'**', redirectTo:'welcome',pathMatch:'full'}
    ])
    
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
