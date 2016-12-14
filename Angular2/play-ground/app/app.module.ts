/* Copyright (C) 2016 Pracxs Net & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: prometheus@pracxs.com
 * or to prometheus@itce.com
 */

import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent }  from './app.component'
import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing.module'
import { ContactsModule } from './contacts/contacts.module'

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, ContactsModule ],
  declarations: [ AppComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}