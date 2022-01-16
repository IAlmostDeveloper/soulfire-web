import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequestResultDto } from '../dtos/AuthRequestResultDto';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthRequest } from '../dtos/AuthRequest';
import { RegisterRequest } from '../dtos/RegisterRequest';


@Injectable()
export class RegisterService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(
              private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) {
  }

  public register(request: RegisterRequest): Observable<AuthRequestResultDto>{
    const url = this.baseUrl + 'api/auth/register';
    return this.http.post<AuthRequestResultDto>(url, request, this.httpOptions);
  }

  // public getHomeAgreementList(state: GetHomeAgreementListRequest): Observable<RequestResultDto> {
  //   this.appService.showOverlay();
  //   const url = this.baseUrl + 'api/home/gethomeagreementlist';
  //   return this.http.post<RequestResultDto>(url, state, this.httpOptions);
  // }
}
