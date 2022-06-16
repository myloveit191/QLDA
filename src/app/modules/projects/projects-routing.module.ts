import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCategoriesComponent } from './project-categories/project-categories.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', 
        component: ProjectsComponent
      },
      {
        path: 'create',
        component: ProjectCreateComponent
      },
      {
        path: 'categories',
        component: ProjectCategoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
