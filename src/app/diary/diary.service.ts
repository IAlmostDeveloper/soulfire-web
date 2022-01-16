import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestResultDto } from '../dtos/RequestResultDto';
import { LocalStorageService } from '../services/local-storage.service';
import { DiaryNote } from '../dtos/DiaryNote';


@Injectable()
export class DiaryService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(
              private http: HttpClient,
              private storageService: LocalStorageService,
              @Inject('BASE_URL') private baseUrl: string) {
  }

  public getDiaryNotes(): Observable<RequestResultDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.storageService.read('token')}`
      })
    }
    const userId = this.storageService.read('userId');
    const url = this.baseUrl + 'api/diary/' + userId;
    return this.http.get<RequestResultDto>(url, httpOptions);
  }

  public addDiaryNote(state: DiaryNote): Observable<RequestResultDto>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.storageService.read('token')}`
      })
    }
    const userId = this.storageService.read('userId');
    const url = this.baseUrl + 'api/diary/' + userId;
    return this.http.post<RequestResultDto>(url, state, httpOptions);
  }

}
