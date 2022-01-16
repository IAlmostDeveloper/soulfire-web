import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { DiaryService } from './diary/diary.service';
import { LocalStorageService } from './services/local-storage.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterService } from './register/register.service';
import { FlexModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDiaryNoteService } from './add-diary-note/add-diary-note.service';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    FlexModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    LocalStorageService,
    AuthService,
    RegisterService,
    DiaryService,
    AddDiaryNoteService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule {}
