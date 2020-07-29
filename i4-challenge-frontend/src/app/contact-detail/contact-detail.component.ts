import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'app/model/Contact';
import { ContactService } from 'app/service/contact.service';
import { Phone } from 'app/model/Phone';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  providers: [ContactService]
})
export class ContactDetailComponent implements OnInit {

  constructor(private service: ContactService, private route:ActivatedRoute) { }

  public contact: Contact = {phones: [], emails: []};
  private contactId: number;
  phoneType: string;
  numberPhone: string;
  emailAddress: string;

  ngOnInit() {
    this.route.params.subscribe( params =>
      this.contactId = params['id']
    );
    if (this.contactId) {
      this.getContact();
    }
  }

  createNewContact(): void {
    this.service.createContact(this.contact)
      .subscribe(
        data => this.onProcess(data),
        error => this.onError(error), 
        () => this.onComplete()
      );
  }

  insertPhone(): void {
    if(this.contactId) {
      this.contact.phones.push(
        {
          contactId: this.contactId ? this.contactId : null,
          number: this.numberPhone,
          phoneType: this.phoneType,
        });
    } else {
      this.contact.phones.push(
        {
          number: this.numberPhone,
          phoneType: this.phoneType,
        });
    }
    
    this.numberPhone = null;
    this.phoneType = null;
    console.log(this.contact);
  }
  
  insertEmail(): void {
    if(this.contactId) {
      this.contact.emails.push(
        {
          contactId: this.contactId ? this.contactId : null,
          emailAddress: this.emailAddress,
        });
    } else {
      this.contact.emails.push(
        {
          emailAddress: this.emailAddress,
        });
    }
    this.emailAddress = null;
    console.log(this.contact);
  }
  
  removePhone(index: number): void {
    this.contact.phones.splice(index, 1);
    console.log(this.contact);
  }
  
  removeEmail(index: number): void {
    this.contact.emails.splice(index, 1);
    console.log(this.contact);
  }
  
  getContact(): void {
    this.service.getContact(this.contactId)
      .subscribe(
        data => this.onProcess(data),
        error => this.onError(error), 
        () => this.onComplete()
      );
  }
  
  onComplete(): void {
    if(this.contact.contactId && !this.contactId) {
      alert("Inserido com sucesso!")
      this.contactId = this.contact.contactId;
    }
    console.log("OnComplete...");
  }

  onError(error: any): void {
    alert(error);
  }

  onProcess(data: Contact): void {
    this.contact = data;
    console.log("OnProcess", this.contact);
  }
}
