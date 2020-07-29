import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/model/Contact';
import { ContactService } from 'app/service/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  providers: [ContactService]
})
export class ContactDetailComponent implements OnInit {

  constructor(private service: ContactService) { }

  public contact: Contact = new Contact();

  ngOnInit() {
    this.contact.Phones = [{number: "11959200912", phoneType: "Cell"}]
  }

  createNewContact(): void {
    this.service.createContact(this.contact)
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
