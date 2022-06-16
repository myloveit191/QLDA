import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryCreateDialogComponent } from '../../shared/dialogs/category-create/category-create-dialog.component';
import { PROJECT_DATA } from '../../_mock/project';
import { PROJECT_CATEGORY_DATA } from '../../_mock/project-category';
import { ProjectCategory } from '../../_models/project-category';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  projectForm!: FormGroup;
  categories!: ProjectCategory[];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog 
  ) { }

  ngOnInit(): void {
    this.categories = PROJECT_CATEGORY_DATA;

    this.projectForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      investor: ['', Validators.required],
      des: [''],
      begin_at: ['', Validators.required],
      end_at: ['', Validators.required],
    });
  }
  onSubmit() {
    // if (this.projectForm.valid) {
    //   let id = PROJECT_CATEGORY_DATA.length + 1;
    //   this.projectForm.addControl('id', new FormControl(id));

    //   PROJECT_DATA.push(this.projectForm.value);
      
    //   this.projectForm.reset();
    // }
  }
  addCategory() {
    const dialogCategory = this.dialog.open(CategoryCreateDialogComponent, {
      width: '60vw'
    });
    dialogCategory.afterClosed().subscribe(category =>{
      let id = this.categories.length + 1;
      category.id = id;
      this.categories.push(category);
      this.projectForm.patchValue({category: id});
    })
  }
}
