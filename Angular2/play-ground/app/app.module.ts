/* Copyright (C) 2016 Pracxs Net & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: prometheus@pracxs.com
 * or to prometheus@itce.com
 */

import { NgModule }       from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { AppComponent }   from './app.component'
import { ContactDetailsComponent } from './contact-details.component'
import { MyUpperPipe }    from './my-upper.pipe'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ContactDetailsComponent, MyUpperPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}