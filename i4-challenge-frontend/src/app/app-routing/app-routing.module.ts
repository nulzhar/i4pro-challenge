import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { ContactComponent } from '../contact/contact.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ContactsListComponent, 
    ContactComponent,
    ContactDetailComponent,
  ]
})

export class AppRoutingModule { }
