import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Headers } from '@angular/http'
import { Contact } from "../model/Contact"; 

@Injectable()
export class ContactService {

  private api = 'https://localhost:44397/api/Contacts';
  
  constructor(private http : Http) { }

  createContact(contact: Contact): Observable<Contact> {  
    var headers = new Headers();
    headers.append("Content-Type", "application/json; chartset=utf-8");
    
    return this.http.post(this.api, JSON.stringify(contact),
       {headers: this.getHeader()}).map(res=> <Contact>res.json());
  }
  
  deleteContact(contact: Contact): Observable<Contact> {  
    var headers = new Headers();
    headers.append("Content-Type", "application/json; chartset=utf-8");
    
    return this.http.delete(this.api + "/" + contact.contactId,
       {headers: this.getHeader()}).map(res=> <Contact>res.json());
  }

  getAllContacts(): Observable<Contact[]> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json; chartset=utf-8");

    return this.http.get(this.api,
       {headers: this.getHeader()}).map(res=> <Contact[]>res.json());
  }

  getContact(contactId: number): Observable<Contact> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json; chartset=utf-8");

    return this.http.get(this.api + "/" + contactId,
       {headers: this.getHeader()}).map(res=> <Contact>res.json());
  }

  private getHeader(): Headers {
    var headers = new Headers();
    headers.append("Content-Type", "application/json; chartset=utf-8");
    return headers;
  }
}
