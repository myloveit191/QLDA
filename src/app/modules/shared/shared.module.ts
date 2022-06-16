import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { TaskComponent } from './form-task/task.component';
import { CategoryCreateDialogComponent } from './dialogs/category-create/category-create-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete-dialog.component';
import { TaskEditComponent } from './dialogs/task-edit/task-edit.component';


@NgModule({
  declarations: [
    CategoryCreateDialogComponent,
    DeleteDialogComponent,
    TaskEditComponent,
    TaskComponent,
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
    TaskComponent,
  ]
})
export class SharedModule { }
