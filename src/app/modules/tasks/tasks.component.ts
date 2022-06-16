import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from '../shared/dialogs/task-edit/task-edit.component';
import { DISPLAYED_TASK_COLUMNS, TASKS_DATA } from '../_mock/task';
import { Task } from '../_models/task';
import { TaskSubjectService } from '../_services/taskSubject.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  dataTasks!: Task[]; 
  disTasksColumns: string[] = DISPLAYED_TASK_COLUMNS;
  
  constructor(
    public dialog: MatDialog,
    public taskSubjectService: TaskSubjectService 
  ) { }

  ngOnInit(): void {
    this.taskSubjectService.tasksObservable.subscribe(tasks => this.dataTasks = tasks)
  }
  getRecord(row: any){
    const dialogCategory = this.dialog.open(TaskEditComponent, {
      width: '80vw'
    });
    this.taskSubjectService.changedTask(row);
  }
}
