import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ModulesComponent } from './modules/modules.component';

import { AuthGuard } from './_guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { TimetableComponent } from './dashboard/timetable/timetable.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { ResultsComponent } from './dashboard/results/results.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'components',
    component: ModulesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'timetable',
        pathMatch: 'full',
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
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
