import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent {    
  constructor(private http: Http) { }
 
  @Input() name
  @Input() tasks 
  remove(taskToRemove){
    this.http.delete('/api/tasks/' + taskToRemove._id)
               .toPromise()
               .then(this.tasks = this.tasks.filter(task => task != taskToRemove))
               .catch(function(err){console.log(err);});
  }
  add(taskToAdd){
    this.tasks = [...this.tasks, {text:taskToAdd, done:false}];
  }
}
