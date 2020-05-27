import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav-component'
import { NavFooterComponent } from './nav/nav-footer-component'

import { ProductsComponent } from './products/product-component'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { DashBoardComponent } from './dash-board/dash-board-component';
import { ProductDetailsComponent } from './products/product-details-component';
import { InvoiceComponent } from './invoice/invoice-component';
import { LoginComponent } from './login/login-component';
import { AuthService } from './service/auth-service';
import { ProfileComponent } from './profile/profile-component';
import { AuthRouterActivateService } from './service/router-activate-service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  declarations: [
    AppComponent,
    NavComponent,
    NavFooterComponent,
    ProductsComponent,
    DashBoardComponent,
    ProductDetailsComponent,
    InvoiceComponent,
    LoginComponent,
    ProfileComponent
          
  ],

  providers: [
    AuthService,
    AuthRouterActivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
