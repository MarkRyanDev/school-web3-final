import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent {
  @Input() name
  @Input() tasks 
  remove(taskToRemove){
    this.tasks = this.tasks.filter(task => task != taskToRemove);
  }
  add(taskToAdd){
    this.tasks = [...this.tasks, {text:taskToAdd, done:false}];
  }
}
