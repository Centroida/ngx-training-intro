/* Copyright (C) 2016 Pracxs Net & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: prometheus@pracxs.com
 * or to prometheus@itce.com
 */

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core'
import {Contact} from "./contact"
import {ContactsService} from "./contact.service"

@Component({
    selector: 'contacts-list',
    template: `
        <ul>
            <li *ngFor="let person of persons" class="item" [class.active]="selected==person">
                <a (click)="onSelect(person)">{{person.firstName}} {{person.lastName | uppercase}}</a>
                <a (click)="remove(person)" class="remove" title="Remove"><span class="glyphicon glyphicon-remove-sign"></span></a>
            </li>
        </ul>
    `
})
export class ContactsListComponent implements OnInit {
    @Input()
    selected: Contact
    @Output()
    selectedChange = new EventEmitter<Contact>()
    
    persons: Contact[]
    
    constructor(private _personService: ContactsService) {}
    
    remove(person: Contact) {
        if(person.id==this.selected.id ) {
            this.selected = null
            this.selectedChange.emit(this.selected)
        }
            
        this._personService.remove(person.id);
    }
    
    onSelect(person: Contact) {
        this.selected = person
        this.selectedChange.emit(this.selected)
    }
    
    ngOnInit() {
        this.persons = this._personService.getAll();
    }
 }
