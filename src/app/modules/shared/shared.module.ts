import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { TaskEditFormComponent } from './form/task-edit/task-edit.component';
import { CategoryCreateDialogComponent } from './dialogs/category-create/category-create-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete-dialog.component';
import { TaskEditComponent } from './dialogs/task-edit/task-edit.component';
import { TaskCreateFormComponent } from './form/task-create/task-create.component';


@NgModule({
  declarations: [
    CategoryCreateDialogComponent,
    DeleteDialogComponent,
    TaskEditComponent,
    TaskEditFormComponent,
    TaskCreateFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports:[
    CategoryCreateDialogComponent,
    DeleteDialogComponent,
    TaskEditComponent,
    TaskEditFormComponent,
    TaskCreateFormComponent
  ]
})
export class SharedModule { }
