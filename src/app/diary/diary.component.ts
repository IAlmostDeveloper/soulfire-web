import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DiaryNote } from '../dtos/DiaryNote';
import { DiaryService } from './diary.service';
@Component({
  selector: 'app-diary',
  templateUrl: `./diary.component.html`,
  styleUrls: ['./diary.component.scss'],
})
export class DiaryComponent implements OnInit {
  constructor(public diaryService: DiaryService) {}
  title = 'Card View Demo';

  gridData: Array<DiaryNote> = [];

  gridColumns = 3;
  ngOnInit(): void {
    this.getDiaryNotes();
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  getDiaryNotes() {
    this.diaryService.getDiaryNotes().subscribe((res) => {
      if (res.status == 200){
        res.content.forEach(element => {
          this.gridData.push(new DiaryNote(element));
        });
      }
    });
  }

  openAddNoteDialog(){

  }
}
