import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'app/model/Contact';
import { ContactService } from 'app/service/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  providers: [ContactService]
})
export class ContactDetailComponent implements OnInit {

  constructor(private service: ContactService, private route:ActivatedRoute) { }

  public contact: Contact = new Contact();
  private contactId: number;

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
  
  getContact(): void {
    this.service.getContact(this.contactId)
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
    alert(error);
  }

  onProcess(data: Contact): void {
    this.contact = data;
    console.log("OnProcess", this.contact);
  }
}
