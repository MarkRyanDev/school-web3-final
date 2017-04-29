import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {

  constructor(private http: Http) {
    this.http.get('/api/employees')
      .toPromise()
      .then(response => {
        this.employees = response.json();
        this.emp = this.employees.find(e=>e._id===this.empid);
        console.log(this.employees);
      })
      .catch(function(err){console.log(err);});
  }
  employees = []
  emp = {name:"", tasks:[]}
  empid="5904ff25bb2b24287822f23a";
  notMeFilter = (e)=> e._id !== this.empid;

}
