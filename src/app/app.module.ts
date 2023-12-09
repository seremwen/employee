import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './ui/components/auth-button/auth-button.component';
import { UserProfileComponent } from './ui/components/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule.forRoot({
      domain: 'dev-p4smezqgja2k1g0g.us.auth0.com',
      clientId: 'nPUH8cDN66PLBlxzqheAcOWgiwGKJqCK',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent,AuthButtonComponent,UserProfileComponent]
})
export class AppModule { }
