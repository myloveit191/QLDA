import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from '../shared/dialogs/task-edit/task-edit.component';
import { DISPLAYED_TASK_COLUMNS, TASKS_DATA } from '../_mock/task';
import { Task } from '../_models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  dataTasks: Task[] = TASKS_DATA; 
  disTasksColumns: string[] = DISPLAYED_TASK_COLUMNS;
  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(TASKS_DATA);
    
  }
  getRecord(row: any){
    const dialogCategory = this.dialog.open(TaskEditComponent, {
      width: '80vw'
    });
    
  }
}
