import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { fakeBackendProvider } from './helpers';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert';
import { HomeComponent } from './home';
import { ContentComponent } from './home/content/content.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { TelephoneComponent } from './home/telephone/telephone.component';
import { TvComponent } from './home/tv/tv.component';
import { AudioComponent } from './home/audio/audio.component';
import { TransportComponent } from './home/transport/transport.component';
import { LaptopsComponent } from './home/laptops/laptops.component';
import { GamingComponent } from './home/gaming/gaming.component';
import { SmartWatchComponent } from './home/smart-watch/smart-watch.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    ContentComponent,
    TelephoneComponent,
    TvComponent,
    AudioComponent ,
    TransportComponent ,
    LaptopsComponent,
    GamingComponent,
    SmartWatchComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  exports: [
    ContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
