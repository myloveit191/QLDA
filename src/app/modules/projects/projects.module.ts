import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectCategoriesComponent } from './project-categories/project-categories.component';
import { MaterialModule } from './material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCreateComponent,
    ProjectCategoriesComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class ProjectsModule { }
