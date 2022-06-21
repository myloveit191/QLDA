import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlatNode, QldaNote } from '../_models/project-tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { TREE_DATA } from '../_mock/project-tree';
import { Project } from '../_models/project';
import { PROJECT_DATA } from '../_mock/project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService],
})
export class ProjectsComponent implements OnInit {
  disProjectColumns: String[] = ['stt', 'name'];
  projectForm!: FormGroup;
  project!: Project;
  dataProjects!: Project[];
  selectedRow!: Number;
  data: any;
  constructor(private fb: FormBuilder,
    private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      investor: ['', Validators.required],
      des: ['', Validators.required],
      begin_at: ['', Validators.required],
      end_at: ['', Validators.required],
    });
    this.project = PROJECT_DATA[0];
    this.dataProjects = PROJECT_DATA;
    this.projectForm.patchValue(this.project);
  }

  onSubmit() {
    
    
  }

  getRecord(row: Project): void {
    // this.projectsService
    //   .dangnhap()
    //   .subscribe(
    //     data => console.log(data)
        
    //   );
    this.projectForm.patchValue(row);
    this.selectedRow = row.id;
  }

}
