import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { NewTaskData, Task } from './task/task.model';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  newTaskCreation = false;

  constructor(private tasksService: TasksService){}



  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCreateTask() {
    this.newTaskCreation = true;
  }

  onCloseCreate(){
    this.newTaskCreation = false;
  }


}
