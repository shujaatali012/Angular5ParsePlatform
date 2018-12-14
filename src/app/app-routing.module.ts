/// application routes implementation

import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './core/services/authentication-guard.service';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { ProductsComponent } from './components/products/products.component';

const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent, canActivate: [AuthenticationGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthenticationGuard] },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, enableTracing: true });

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false, initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
