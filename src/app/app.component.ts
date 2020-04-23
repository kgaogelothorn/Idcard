import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Idcard';
  UserInfo: any = [];
  showInfo: any = [];

  constructor(readonly http: HttpClient) {
      console.log('constructor');
      this.ngOnIniIt();
  }

  ngOnIniIt() {
    this.showInfo.name = true ;
    this.getUserInfo().subscribe((user: any) => {
      this.UserInfo.image = user.results[0].picture.large;
      this.UserInfo.firstname = `${user.results[0].name.first} ${user.results[0].name.last}`;
      this.UserInfo.email = user.results[0].email;
      this.UserInfo.birthdate = user.results[0].dob.date;
      this.UserInfo.location = `${user.results[0].location.street.name} ${user.results[0].location.city}`;
      this.UserInfo.phone = user.results[0].phone;
      this.UserInfo.gender = user.results[0].gender;
    });
    console.log('');
  }

  getUserInfo() {
    const options = {headers: {'Content-type': 'application/json'}};
    return this.http.get('https://randomuser.me/api/', options);
   }
   show(info) {
     this.showInfo = [];
     this.showInfo[info] = true;

   }
}
