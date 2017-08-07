import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TimetableComponent } from './timetable/timetable.component';
import { NotesComponent } from './notes/notes.component';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [TimetableComponent, NotesComponent, ResultsComponent, ProfileComponent]
})
export class DashboardModule { }
