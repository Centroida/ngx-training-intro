/* Copyright (C) 2016 Pracxs Net & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: prometheus@pracxs.com
 * or to prometheus@itce.com
 */

import { Component } from '@angular/core'

@Component({
    selector: 'contacts',
    template: `
        <contacts-list [(selected)]="selected"></contacts-list>

        <a id="add" href="#" (click)="onAdd()" class="text-danger"><span class="glyphicon glyphicon-plus"></span>Add</a>

        <contact-details [(contact)]="selected"></contact-details>
    `
})
export class ContactsComponent {
    selected: Contact

    onAdd() {
        this.selected = { id: -1, firstName: '', lastName: '', email: '' } 
    }
}