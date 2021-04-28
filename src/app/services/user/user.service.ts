import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';

@Injectable()
export class UserService {
  readonly apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  find(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}user`);
  }

  findOne(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}user/${id}`);
  }

  create(body: User): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}user`, body);
  }

  update(body: User): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/user`, body);
  }

}
