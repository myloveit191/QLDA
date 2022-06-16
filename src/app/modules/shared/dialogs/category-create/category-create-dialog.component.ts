import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-create-dialog',
  templateUrl: './category-create-dialog.component.html',
  styleUrls: ['./category-create-dialog.component.scss']
})
export class CategoryCreateDialogComponent implements OnInit {
  categoryForm!: FormGroup

  constructor( 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CategoryCreateDialogComponent>
    ) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      des: ['']
    })
  }
  onSubmit(){
    this.dialogRef.close(this.categoryForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
