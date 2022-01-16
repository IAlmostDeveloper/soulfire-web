import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { DiaryNote } from '../dtos/DiaryNote';
import { AddDiaryNoteService } from './add-diary-note.service';

@Component({
  selector: 'add-diary-note',
  templateUrl: './add-diary-note.component.html',
  styleUrls: ['./add-diary-note.component.css'],
})
export class AddDiaryNoteComponent implements OnInit {
  constructor(
    private addDiaryNoteService: AddDiaryNoteService,
    private formBuilder: FormBuilder,
    private storageService: LocalStorageService,
    private router: Router
  ) {}
  isSubmitted = false;

  addDiaryForm: FormGroup;

  ngOnInit() {
    this.addDiaryForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  get formControls() {
    return this.addDiaryForm.controls;
  }

  addDiaryNote() {
    var diaryNote = new DiaryNote({
      userId: this.storageService.read('userId'),
      title: this.addDiaryForm.value.title,
      content: this.addDiaryForm.value.content,
      updatedDate: new Date(),
    });
    this.addDiaryNoteService.addDiaryNote(diaryNote).subscribe((res) => {
      if (res.status == 200) {
        this.router.navigateByUrl('/diary');
      }
    });
  }
}
