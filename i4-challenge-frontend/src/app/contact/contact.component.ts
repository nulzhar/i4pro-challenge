import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'app/service/contact.service';
import { Contact } from 'app/model/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  @Input()
  contact: Contact;

  constructor(private service: ContactService, private router: Router) { }

  ngOnInit() {
  }

  private postData: any;

  deleteContact(): void {
    this.service.deleteContact(this.contact)
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log("acesso a webapi post ok...")
      );
  }
  showContact(): void {
    this.router.navigate( ['/contact', {id: this.contact.contactId}]);
  }
}
