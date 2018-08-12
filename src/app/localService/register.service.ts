import { Injectable } from '@angular/core';
import {CrudService} from '../services/crud.service';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../model/profile';
import {GeneriCrudService} from '../services/generi-crud.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends GeneriCrudService<Profile> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://api.mlinzi.co.ke:8080/api',
      'auth/signup');
  }
}
