import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {

  @Input({required: true}) task!: Task;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''

  ngOnInit() {
    if(this.task){
      this.enteredTitle = this.task.title;
      this.enteredSummary = this.task.summary;
      this.enteredDate = this.task.dueDate;
    }
  }

  onSubmit(){
    this.tasksService.editTask(this.task!,{
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    })
    this.close.emit()
  }

  onCancelEdit(){
    this.close.emit()
  }

}
