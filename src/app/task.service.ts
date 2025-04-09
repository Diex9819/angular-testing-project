import { Injectable } from '@angular/core';
import { Tarea } from './taskk';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task!: Tarea[];



  constructor() { 
    this.task = JSON.parse(localStorage.getItem("data") || '[]');
}

addTask(task: Tarea) {
  this.task.push(task);
  localStorage.setItem('data', JSON.stringify(this.task))
}

nuevaTask():Tarea {
  return{
  agregar:'',
  actualizar:'',
  }
}

getTask():string[]{
  const taskString = localStorage.getItem('data');
  if (taskString===null) {
    return[];
  }
  const favorites = JSON.parse(taskString);
  const length = favorites.length;
  return favorites;
} 

}
