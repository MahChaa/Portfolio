import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Modules
import {ClipboardModule} from '@angular/cdk/clipboard';

// UI libraries
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
