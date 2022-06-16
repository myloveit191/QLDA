import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MEMBERS_DATA } from '../../_mock/member';
import { PRIORITIES_DATA } from '../../_mock/priority';
import { PROJECT_DATA } from '../../_mock/project';
import { STATUS_DATA } from '../../_mock/status';
import { Member } from '../../_models/member';
import { Priority } from '../../_models/priority';
import { Project } from '../../_models/project';
import { Status } from '../../_models/status';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {


  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
   

  }
  
}
