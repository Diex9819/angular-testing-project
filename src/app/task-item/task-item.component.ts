import { Component } from '@angular/core';
import { Tarea } from '../taskk';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  task!: Tarea;

  constructor(public taskService:TaskService){}

  ngOnInit(){
    this.task=this.taskService.nuevaTask();
  }

  nuevaTaskk():void {
    this.taskService.addTask(this.task);
    this.task= this.taskService.nuevaTask();
  }
  
  



  

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }

}
