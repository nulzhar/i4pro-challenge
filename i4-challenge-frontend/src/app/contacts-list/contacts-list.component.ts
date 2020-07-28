import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public contacts: any = [
    {id: 1, name: 'Paulo'}, 
    {id: 2, name: 'Joaquina'},
  ];
}
