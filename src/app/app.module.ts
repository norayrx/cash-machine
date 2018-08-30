import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ngfModule, ngf } from 'angular-file';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { CheckPageComponent } from './pages/check-page/check-page.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FooterComponent } from './common/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ngfModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
