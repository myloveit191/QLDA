import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';
import { DISPLAYED_SUB_TASK_COLUMNS } from 'src/app/modules/_mock/task';
import { MEMBERS_DATA } from '../../../_mock/member';
import { PRIORITIES_DATA } from '../../../_mock/priority';
import { PROJECT_DATA } from '../../../_mock/project';
import { STATUS_DATA } from '../../../_mock/status';
import { Member } from '../../../_models/member';
import { Priority } from '../../../_models/priority';
import { Project } from '../../../_models/project';
import { Status } from '../../../_models/status';
import { Task } from '../../../_models/task';
import { TaskSubjectService } from '../../../_services/taskSubject.service';

@Component({
  selector: 'task-edit-form',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditFormComponent implements OnInit {

  tasks!: Task[];
  tasksByProject!: Task[];
  tasksForm!: FormGroup;
  isAddMode!: boolean;
  projects!: Project[];
  priorities!: Priority[];
  status_s!: Status[];
  members!: Member[];
  filteredMembers?: Observable<Member[]>;
  filteredMembersChip?: Observable<Member[]>;
  memberCtrl = new FormControl('');
  // selected_members: Member[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  dataSubTasks: Task[] = []; 
  disSubTasksColumns: string[] = DISPLAYED_SUB_TASK_COLUMNS;
  @ViewChild('memberInput')
  memberInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder,
    private taskSubjectService: TaskSubjectService) { }

  ngOnInit(): void {
    this.projects = PROJECT_DATA;
    this.status_s = STATUS_DATA;
    this.priorities = PRIORITIES_DATA;
    this.members = MEMBERS_DATA;
    this.tasksForm = this.fb.group({
      name: ['', Validators.required],
      des: [''],
      project: ['', Validators.required],
      belong_task: [''],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      begin_at: [''],
      end_at: [''],
      leader: ['', Validators.required],
      selected_members: this.fb.array([]),
    });


    // Observable Chip ( Angular Material )
    this.filteredMembers = this.tasksForm.get('leader')?.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value?.name)),
      map(name => (name ? this._filter(name) : this.members.slice())),
    );
    this.filteredMembersChip = this.memberCtrl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value?.name)),
      map(name => (name ? this._filter(name) : this.members.slice())),
    );

    //Quan s??t d??? li???u t??? Task
    this.taskSubjectService.tasksObservable.subscribe(tasks => this.tasks = tasks);
    this.taskSubjectService.currentTaskObservable.subscribe((task) => {
      this.tasksForm.patchValue(task);
      task.selected_members.map((member: Member) =>{
        const memberForm = this.fb.group({
          id: member.id,
          name: member.name,
          avatar: member.avatar
        });
        this.selected_members.push(memberForm);
      })
      this.tasksByProject = this.tasks.filter(t => t.project === task.project && t.id != task.id);
      task.include_task?.map(id => {
        const s = this.tasks.filter(task => task.id === id);   
        console.log(s[0]);
             
        this.dataSubTasks.push(s[0]);
      })
    });

    
    //Quan s??t s??? thay ?????i d??? li???u theo Project
    this.tasksForm.get('project')?.valueChanges.subscribe(project => {
      this.tasksByProject = this.tasks.filter(task => task.project === project);
    });

  }

  get selected_members() {
    return this.tasksForm.controls['selected_members'] as FormArray;
  }

  private _filter(name: string): Member[] {

    const filterValue = name.toLowerCase();

    return this.members.filter(member => member.name.toLowerCase().includes(filterValue));
  }
  
  onSubmit() {
    if (this.tasksForm.valid) {


    }
  }

  //So s??nh ????? selected trong select-option
  compareId(c1: any,c2: any): boolean {
    return c1?.id === c2?.id;
  }

  //Hi???n th??? t??n v???i autocomplete
  displayWith(member: Member): string {
    return member?.name ?? '';
  }

  // X??a th??nh vi??n kh???i Chip
  removeMemberChip(index: number): void {
    if (index >= 0) {
      this.tasksForm.get('selected_members')?.value.splice(index, 1);
    }
  }

  //Th??m th??nh vi??n v??o Chip. X??? ki???n x???y ra khi ???n enter
  add(event: MatChipInputEvent): void {

  }

  //S??? ki???n click ch???n tr??n autocomplete
  selected(event: MatAutocompleteSelectedEvent): void {
    this.tasksForm.get('selected_members')?.value.push(event.option.value);
    this.memberInput.nativeElement.value = '';
    this.memberCtrl.setValue(null);
  }

  //Ch???n 1 h??ng trong danh s??ch b???ng
  getRecord(row: any) {

  }
}
