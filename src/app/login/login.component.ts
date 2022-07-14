import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  email: string = '';
  password: string = '';
  constructor(private route:Router) {

  }

  ngOnInit(): void {}

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.email === "test@test.com" && this.password === "test") {
      this.route.navigateByUrl('home');
      // alert('working');
    } else{
      
      // this.route.navigateByUrl('page');
    }
    //  alert('not working');

  }
}
