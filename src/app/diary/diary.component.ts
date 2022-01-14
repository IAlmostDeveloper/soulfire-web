import { Component, OnInit } from '@angular/core';
import { DiaryService } from './diary.service';
@Component({
  selector: 'app-diary',
  templateUrl: `./diary.component.html`,
  styles: [],
})
export class DiaryComponent implements OnInit {
  constructor(public diaryService: DiaryService) {}

  ngOnInit(): void {}

  getDiaryNotes() {
    this.diaryService.getDiaryNotes('')
    .subscribe(res => {

    });
  }
}
