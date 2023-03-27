
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Convert } from './convert.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component'
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes=[
 {path:'home',component:HomeComponent,title:'Flowersite|home'},
 {path:'products',component:ProductListComponent},
 {path:'about',component:AboutusComponent,title:'Flowersite|about'},
 {path:'',redirectTo:'home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    Convert,
    HomeComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
