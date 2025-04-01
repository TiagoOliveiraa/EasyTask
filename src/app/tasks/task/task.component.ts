import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { EditTaskComponent } from "../edit-task/edit-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe, EditTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  taskEdit = false;

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.completeTask(this.task.id);
  }

  onEditTask(){
    this.taskEdit = true;
    console.log(this.taskEdit);
  }

  onCloseEdit(){
    this.taskEdit = false;
  }
}
