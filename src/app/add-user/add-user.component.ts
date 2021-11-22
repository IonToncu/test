import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/model/user';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // user = new User();
  userName:String = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public  postUser(userName:String, age:String){
    //console.log(userName);
    let url = "http://localhost:8080/user/";
    console.log(url);
    this.http.post(url, {
      userName: userName,
      age:  age
    }).toPromise().then((data: any) => {
      console.log(data)
    })
  }

}

