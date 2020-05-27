import { Routes } from "@angular/router";
import { ProductsComponent } from './products/product-component';
import { DashBoardComponent } from './dash-board/dash-board-component';
import { ProductDetailsComponent } from './products/product-details-component';
import { InvoiceComponent } from './invoice/invoice-component';
import { LoginComponent } from './login/login-component';
import { ProfileComponent } from './profile/profile-component';
import { AuthRouterActivateService } from './service/router-activate-service';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'home', component: DashBoardComponent, canActivate: [AuthRouterActivateService] }, 
  { path: 'products', component: ProductsComponent, canActivate: [AuthRouterActivateService] },
  { path: 'products/:message', component: ProductDetailsComponent, canActivate: [AuthRouterActivateService] },
  { path: 'invoice', component: InvoiceComponent, canActivate: [AuthRouterActivateService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthRouterActivateService] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];
