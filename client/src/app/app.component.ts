import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //this will run after constructer
  title = 'Dating App';
  users: any; //define property 'any' is like var

  constructor(private http: HttpClient){} //inject httpclient

  ngOnInit() {
   this.getUsers(); 
  }

  getUsers(){
    //get ruturn observable but observable is lazy so we need to subcribe
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error)
    })
  }
}
