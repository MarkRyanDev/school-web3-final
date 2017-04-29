import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private http: Http) { 
      this.http.get('/api/employees')
               .toPromise()
               .then(response => this.employees = response.json())
               .catch(function(err){console.log(err);});
    }
    employees = []
}
