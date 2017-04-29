import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-employee-mytasks',
  templateUrl: './employee-mytasks.component.html',
  styleUrls: ['./employee-mytasks.component.css']
})
export class EmployeeMytasksComponent {
  constructor(private http: Http) { }

  @Input() emp
  remove(taskToRemove){
    this.http.delete('/api/tasks/' + taskToRemove._id)
      .toPromise()
      .then(()=>this.emp.tasks = this.emp.tasks.filter(task => task != taskToRemove))
      .catch(function(err){console.log(err);});
  }
  add(taskToAdd){
    this.http.post('/api/tasks', {text:taskToAdd, done:false, empid:this.emp._id})
      .toPromise()
      .then(response=>{
        this.emp.tasks =
          [
            ...this.emp.tasks,
            {text:taskToAdd, done:false, empid:this.emp._id, _id:response.json()}
          ];
      })
      .catch(function(err){console.log(err);});
  }

}
