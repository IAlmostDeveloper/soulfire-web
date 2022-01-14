import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestResultDto } from '../dtos/RequestResultDto';
import { LocalStorageService } from '../services/local-storage.service';


@Injectable()
export class DiaryService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(
              private http: HttpClient,
              private storageService: LocalStorageService,
              @Inject('BASE_URL') private baseUrl: string) {
  }

  public getDiaryNotes(userId: string): Observable<RequestResultDto> {
    this.httpOptions.headers.append("Authorization",`Bearer ${this.storageService.read('token')}`);
    const url = this.baseUrl + 'api/diary/' + userId;
    return this.http.get<RequestResultDto>(url, this.httpOptions);
  }

  // public getHomeAgreementList(state: GetHomeAgreementListRequest): Observable<RequestResultDto> {
  //   this.appService.showOverlay();
  //   const url = this.baseUrl + 'api/home/gethomeagreementlist';
  //   return this.http.post<RequestResultDto>(url, state, this.httpOptions);
  // }

  // public getHomeStatistics(state: GetHomeStatisticsRequest): Observable<RequestResultDto> {
  //   this.appService.showOverlay();
  //   const url = this.baseUrl + 'api/home/gethomestatistics';
  //   return this.http.post<RequestResultDto>(url, state, this.httpOptions);
  // }
}
