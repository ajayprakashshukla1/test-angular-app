import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {UserModule} from './services/user/user.module';
import {HttpClientModule} from '@angular/common/http';
const routes = [
  {
      path: 'app',
      component: AppComponent
  },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
