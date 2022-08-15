import { SendmailService } from './../../services/sendmail.service';
import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private sendmail: SendmailService) { }

  ngOnInit(): void {
  }

  Send():void{
    const contacto = new Contacto (this.name, this.email, this.message);
    this.sendmail.send(contacto).subscribe(
      data => {
      alert("Mail Enviado");
      this.name = '';
      this.email = '';
      this.message = '';
    }, err => {
      alert("Fallo");
    })
  }

}
