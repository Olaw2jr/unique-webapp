import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../_guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NotesComponent } from './notes/notes.component';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  /* {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'timetable',
        pathMatch: 'full'
      },
      {
        path: 'timetable',
        component: TimetableComponent
      },
      {
        path: 'notes',
        component: NotesComponent
      },
      {
        path: 'results',
        component: ResultsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
