import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  dataTasks!: MatTableDataSource<Task>; 
  disTasksColumns: string[] = DISPLAYED_TASK_COLUMNS;
  selection!: SelectionModel<Task>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    public taskSubjectService: TaskSubjectService 
  ) { }

  ngOnInit(): void {
    this.taskSubjectService.tasksObservable.subscribe(tasks => this.dataTasks = new MatTableDataSource<Task>(tasks))
    this.selection = new SelectionModel<Task>(true, []);
  }


  ngAfterViewInit() {
    this.dataTasks.paginator = this.paginator;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataTasks.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataTasks.data);
  }

  getRecord(row: Task){
    const dialogCategory = this.dialog.open(TaskEditComponent, {
      width: '80vw'
    });
    this.taskSubjectService.changedTask(row);
  }
}
