import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/// import custom modules
import { LayoutModule } from './components/layout/layout.module';

/// import custom components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/// import core services to communicate with backend
import { AuthenticationGuard } from './core/services/authentication-guard.service';
import { ConfigurationService } from './core/services/configuration.service';
import { ParseService } from './core/services/parse.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotAuthorizedComponent,
    ProductsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule
  ],
  providers: [
    AuthenticationGuard,
    ConfigurationService,
    ParseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
