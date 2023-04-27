import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Task[] {
    return TASKS;
  }

  getTasksWithObservable(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

  getTasksWithHttpClient(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
