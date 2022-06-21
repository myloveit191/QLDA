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
import { HttpErrorHandler } from '../_services/http-error-handler.service';
import { MessageService } from '../_services/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from '../_services/projects.service';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCreateComponent,
    ProjectCategoriesComponent,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // HttpClientModule,
    ProjectsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    // HttpErrorHandler,
    // MessageService,
    // ProjectsService
  ],
})
export class ProjectsModule { }
