import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }

  getTasksWithObservable(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
