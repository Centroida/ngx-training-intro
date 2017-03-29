/* Copyright (C) 2016 Pracxs Net & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: prometheus@pracxs.com
 * or to prometheus@itce.com
 */

import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core'
import { Contact } from './contact'
import { NgForm } from "@angular/forms"
import { ContactsService } from './contact.service'

@Component({
    selector: 'contact-details',
    template: `
        <div id="contactsDetailsContainer" *ngIf="contact">
            <span *ngIf="!showEdit">
                <label>First Name: </label><b>{{contact.firstName}}</b><br/>
                <label>Last Name: </label><b>{{contact.lastName}}</b><br/>
                <label>email: </label><b>{{contact.email}}</b><br/>
                <label></label><a href="#" class="text-danger" (click)="showEdit = true"><span class="glyphicon glyphicon-edit"></span>Edit</a><br/>
            </span>
            <form name="editContactForm" #form="ngForm" (ngSubmit)="onSubmit(form)" *ngIf="showEdit" novalidate>
                <label for="firstName">First Name: </label>
                <input #inp id="firstName" name="firstName" [ngModel]="contact.firstName" required><br/>
                <div class="alert alert-danger" role="alert" *ngIf="!form.controls.firstName?.pristine && !form.controls.firstName?.valid">First name is required</div>
                
                <label for="lastName">Last Name: </label>
                <input id="lastName" name="lastName" [ngModel]="contact.lastName" required><br/>
                <div class="alert alert-danger" role="alert" *ngIf="form.controls.lastName && !form.controls.lastName.pristine && !form.controls.lastName.valid">Last name is required</div>

                <label for="email">email: </label>
                <input id="email" name="email" [ngModel]="contact.email" email><br/>
                <div class="alert alert-danger" role="alert" *ngIf="form.controls.email && !form.controls.email.valid">Email is invalid</div>
                
                <label></label>
                <input type="submit" class="btn btn-danger" value="{{ !contact.id ? 'Add' : 'Save' }}" [disabled]="form.invalid || form.pristine" />
                <a href="#" class="text-danger" (click)="onCancel()">Cancel</a>

                <pre>{{inp.className|json}}</pre>
            </form>
        </div>
    `
})
export class ContactDetailsComponent implements OnChanges {
    @Input()
    contact: Contact
    @Output()
    contactChange = new EventEmitter<Contact>()
    showEdit: boolean = false

    constructor(private contactsService: ContactsService) {}

    onCancel() {
        this.showEdit = false
    }

    ngOnChanges(changes) {
        if(changes && changes.contact && changes.contact.currentValue!==changes.contact.previousValue)
            this.showEdit = ( this.contact && this.contact.id === null )
    }

    onSubmit(form: NgForm) {
        if( !form.valid )
            return

        let dirtyContact: Contact = form.value
        dirtyContact.id = this.contact.id

        if(this.contact.id === null)
            this.contactsService.add(dirtyContact)   
        else
            this.contactsService.update(dirtyContact);

        this.contact = dirtyContact
        this.showEdit = false

        this.contactChange.emit(dirtyContact)
    }
}