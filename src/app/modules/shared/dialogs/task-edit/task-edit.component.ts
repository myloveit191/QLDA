import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  tasksForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskEditComponent>
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.dialogRef.close(this.tasksForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
