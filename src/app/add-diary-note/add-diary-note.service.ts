import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiaryNote } from '../dtos/DiaryNote';
import { RequestResultDto } from '../dtos/RequestResultDto';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AddDiaryNoteService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private storageService: LocalStorageService,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public addDiaryNote(request: DiaryNote): Observable<RequestResultDto> {
    const url = this.baseUrl + 'api/diary';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageService.read('token')}`,
      }),
    };
    return this.http.post<RequestResultDto>(url, request, httpOptions);
  }
}
