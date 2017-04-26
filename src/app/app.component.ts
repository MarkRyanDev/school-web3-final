import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Sally Salamander"
  tasks = [
    {text:"clean computers", done:false},
    {text:"make invoice", done:false},
    {text:"email Frank", done:false},
  ]
  remove(taskToRemove){
    this.tasks = this.tasks.filter(task => task != taskToRemove);
  }
  add(taskToAdd){
    this.tasks = [...this.tasks, {text:taskToAdd, done:false}];
  }
}
