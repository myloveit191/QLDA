import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';
import { MEMBERS_DATA } from '../../_mock/member';
import { PRIORITIES_DATA } from '../../_mock/priority';
import { PROJECT_DATA } from '../../_mock/project';
import { STATUS_DATA } from '../../_mock/status';
import { Member } from '../../_models/member';
import { Priority } from '../../_models/priority';
import { Project } from '../../_models/project';
import { Status } from '../../_models/status';

@Component({
    selector: 'form-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    tasksForm!: FormGroup
    projects!: Project[];
    priorities!: Priority[];
    status_s!: Status[];
    members!: Member[];
    filteredMembers?: Observable<Member[]>;
    filteredMembersChip?: Observable<Member[]>;
    memberCtrl = new FormControl('');
    // selected_members: Member[] = [];
    separatorKeysCodes: number[] = [ENTER, COMMA];
  
    @ViewChild('memberInput')
    memberInput!: ElementRef<HTMLInputElement>;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.projects = PROJECT_DATA;
        this.status_s = STATUS_DATA;
        this.priorities = PRIORITIES_DATA;
        this.members = MEMBERS_DATA;
        this.tasksForm = this.fb.group({
            name: ['', Validators.required],
            des: [''],
            project: ['', Validators.required],
            priority: ['', Validators.required],
            status: ['', Validators.required],
            begin_at: [''],
            end_at: [''],
            leader: ['', Validators.required],
            selected_members: new FormArray([]),
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
    }
    onSubmit() {
        console.log(this.tasksForm.value);
    }

    private _filter(name: string): Member[] {

        const filterValue = name.toLowerCase();

        return this.members.filter(member => member.name.toLowerCase().includes(filterValue));
    }

    //Hiển thị tên với autocomplete
  displayWith(member: Member): string {
    return member?.name ?? '';
  }

  // Xóa thành viên khỏi Chip
  removeMemberChip(index: number): void {
    if (index >= 0) {
      this.tasksForm.get('selected_members')?.value.splice(index,1);
    }
  }
  //Thêm thành viên vào Chip. Xự kiện xảy ra khi ấn enter
  add(event: MatChipInputEvent): void {
     
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tasksForm.get('selected_members')?.value.push(event.option.value);
    this.memberInput.nativeElement.value = '';
    this.memberCtrl.setValue(null);
  }
}
