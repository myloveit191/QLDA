import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatNode, QldaNote } from '../_models/project-tree';
import { Project } from '../_models/project';
import { TREE_DATA } from '../_mock/project-tree';
import { PROJECT_DATA } from '../_mock/project';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private _transformer = (node: QldaNote, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      id: node.id
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  hasChild = (_: number, node: FlatNode) => node.expandable;


  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  panelOpenState = true;

  projectForm!: FormGroup;
  project!: Project;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.dataSource.data = TREE_DATA;
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      investor: ['', Validators.required],
      des: ['', Validators.required],
      begin_at: ['', Validators.required],
      end_at: ['', Validators.required],
    });
    this.project = PROJECT_DATA[0];
    this.projectForm.patchValue(this.project);

  }

  showInfo(node: any) {
    this.project = PROJECT_DATA.filter(p => p.id === node.id)[0];
    this.projectForm.patchValue(this.project);
  }
  onSubmit() {

  }
}
