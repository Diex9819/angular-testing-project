import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    tasks: string[] = [];
    

  constructor(public taskService:TaskService) {
  }

  ngOnInit(){
    this.tasks=this.taskService.getTask()
  }
  /*updateTask(task: string) {
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    console.log('Deleting task:', task);
  }*/
}
