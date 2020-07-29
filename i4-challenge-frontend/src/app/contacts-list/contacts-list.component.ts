import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'app/service/contact.service';
import { Contact } from 'app/model/Contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  providers: [ContactService]
})
export class ContactsListComponent implements OnInit {

  constructor(private service: ContactService, private router: Router) { 
    this.getAllContact();
  }

  ngOnInit() {
    
  }

  public contacts: Contact[] = [];

  createNewContact(): void {
    this.router.navigate( ['/contact']);
  }

  getAllContact(): void {
    this.service.getAllContacts()
      .subscribe(
        data => this.onProcess(data),
        error => this.onError(error), 
        () => this.onComplete()
      );
  }

  onComplete(): void {
    console.log("OnComplete...");
  }

  onError(error: any): void {
    console.log(error);
  }

  onProcess(data: Contact[]): void {
    this.contacts.push(...data);
    console.log("OnProcess", this.contacts);
  }

}
