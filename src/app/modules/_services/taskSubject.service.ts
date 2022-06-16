import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TASKS_DATA } from '../_mock/task';
import { Task } from '../_models/task';

@Injectable()
export class DataService {

    private tasksSource = new BehaviorSubject(TASKS_DATA);
    currentMessage = this.tasksSource.asObservable();

    constructor() { }

    changed(tasks: Task[]) {
        this.tasksSource.next(tasks)
    }

}