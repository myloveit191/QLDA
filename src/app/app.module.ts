import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './modules/header/header.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './modules/_services/http-error-handler.service';
import { MessageService } from './modules/_services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
