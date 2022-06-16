import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DeleteDialogComponent } from '../../shared/dialogs/delete/delete-dialog.component';
import { PROJECT_CATEGORY_DATA } from '../../_mock/project-category';
import { ProjectCategory } from '../../_models/project-category';
@Component({
  selector: 'app-project-categories',
  templateUrl: './project-categories.component.html',
  styleUrls: ['./project-categories.component.scss']
})

export class ProjectCategoriesComponent implements OnInit {
  isAddMode!: boolean;
  category!: ProjectCategory;
  dataSource: ProjectCategory[] = PROJECT_CATEGORY_DATA;
  displayedColumns: String[] = ['id', 'name', 'options'];
  categoryForm!: FormGroup;

  @ViewChild(MatTable) table: MatTable<ProjectCategory> | undefined;

  constructor(private fb: FormBuilder, public deleteDialog: MatDialog) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      des: ['']
    });
    this.isAddMode = true;
  }

  onSubmit() {
    if (this.isAddMode) {
      this.createForm();
    } else {
      this.updateForm();
    }
  }
  getRecord(element: ProjectCategory) {
    this.categoryForm.reset();
    this.isAddMode = false;
    this.categoryForm.patchValue(element);
    this.category = element;
  }
  resetForm(): void {
    this.isAddMode = true;
  }
  createForm() {

    let id = PROJECT_CATEGORY_DATA.length + 1;
    this.category = {
      id: id,
      name: this.categoryForm.value.name,
      des: this.categoryForm.value.des,
    };
    this.dataSource.push(this.category);
    this.table?.renderRows();
    this.categoryForm.reset();
  }

  updateForm() {
    if (!this.isAddMode) {
      for (const obj of PROJECT_CATEGORY_DATA) {
        if (obj.id === this.category.id) {
          obj.name = this.categoryForm.value.name;
          obj.des = this.categoryForm.value.des;
        }
      }
      this.categoryForm.reset();
    }
  }

  removeRow(index: number) {    
    const deleteDialog = this.deleteDialog.open(DeleteDialogComponent, {
      width: '350px'
    });
    deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.splice(index, 1);
        this.table?.renderRows();
        this.categoryForm.reset();
      }
    })
  }
}
