import { Email } from 'app/model/Email';
import { Phone } from 'app/model/Phone';

export class Contact {
    contactId?: number;
    firstName?: string;
    lastName?: string;
    phones?: Phone[];
    emails?: Email[];
}