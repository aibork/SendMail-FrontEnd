import { Observable } from 'rxjs';
import { Contacto } from './../model/contacto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {
  URL = 'http://localhost:8080/contacto/'

  constructor(private httpClient: HttpClient) { }

  public send(contacto: Contacto):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'send', contacto);
  }

}
