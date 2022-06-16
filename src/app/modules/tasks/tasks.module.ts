import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskCreateComponent } from './task-create/task-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TasksComponent } from './tasks.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { TaskEditComponent } from '../shared/dialogs/task-edit/task-edit.component';
import { TaskSubjectService } from '../_services/taskSubject.service';


@NgModule({
  declarations: [
    TaskCreateComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers:[
    TaskSubjectService
  ]
})
export class TasksModule { }
