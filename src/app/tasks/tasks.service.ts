import { Injectable } from "@angular/core";
import { NewTaskData, Task } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string){
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTaskData, userId: string){
    this.tasks?.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    })
    this.saveTasks();
  }

  editTask(oldTask: Task, updatedTask:NewTaskData){
    const task = this.tasks?.find((item) => item.id == oldTask.id)
    if(task){
      updatedTask.date != "" && (task.dueDate = updatedTask.date);
      updatedTask.title != "" && (task.title = updatedTask.title);
      updatedTask.summary != "" && (task.summary = updatedTask.summary);
    }
    this.saveTasks();
  }

  completeTask(taskId: string){
    this.tasks = this.tasks?.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

}
