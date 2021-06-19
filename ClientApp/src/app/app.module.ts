import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersDetailsModule } from './components/users-details/users-details.module';
import { UsersListModule } from './components/users-list/users-list.module';
import { UsersSelectionModule } from './components/users-selection/users-selection.module';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersService } from './service/users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule,
    FlexLayoutModule,

    HttpClientModule,

    UsersSelectionModule,
    UsersListModule,
    UsersDetailsModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
  UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
