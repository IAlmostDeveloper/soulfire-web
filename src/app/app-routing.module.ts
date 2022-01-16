import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { SelfbeliefsComponent } from './selfbeliefs/selfbeliefs.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PresetsComponent } from './presets/presets.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AddDiaryNoteComponent } from './add-diary-note/add-diary-note.component';

const routes: Routes = [
  { path: 'diary', component: DiaryComponent },
  { path: 'adddiarynote', component: AddDiaryNoteComponent },
  { path: 'selfbeliefs', component: SelfbeliefsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'presets', component: PresetsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DiaryComponent,
  SelfbeliefsComponent,
  AchievementsComponent,
  PresetsComponent,
  ProfileComponent,
  AuthComponent,
  RegisterComponent,
  AddDiaryNoteComponent
];
