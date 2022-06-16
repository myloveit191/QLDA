import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TASKS_DATA } from '../_mock/task';
import { Task } from '../_models/task';

@Injectable()
export class TaskSubjectService {

    private tasksSource = new BehaviorSubject(TASKS_DATA);
    private currentTaskSource = new BehaviorSubject({});
    tasksObservable = this.tasksSource.asObservable();
    currentTaskObservable = this.currentTaskSource.asObservable();
    constructor() { }

    changedTasks(tasks: Task[]) {
        this.tasksSource.next(tasks)
    }

    changedTask(task: Task) {
        this.currentTaskSource.next(task)
    }
}