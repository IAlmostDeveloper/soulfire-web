import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfbeliefsComponent } from './selfbeliefs/selfbeliefs.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PresetsComponent } from './presets/presets.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
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
  ],
  providers: [
    LocalStorageService,
    AuthService,
    RegisterService,
    DiaryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
