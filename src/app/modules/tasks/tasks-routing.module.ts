import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: TasksComponent,
    },
    {
      path: 'create',
      component: TaskCreateComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
