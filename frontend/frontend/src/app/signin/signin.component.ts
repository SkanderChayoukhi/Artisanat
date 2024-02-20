import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { AccountService } from '../services/accounts/account.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signupUsers: any[] =[];
  signupObj: any={
      userName: '',
      email:'',
      password: ''
  };
  loginObj: any ={
      userName: '',
      password: ''
  };

  constructor() {}
  ngOnInit(): void{
      const localData = localStorage.getItem('signUpUsers');
      if (localData != null){
          this.signupUsers = JSON.parse(localData);
      }
  }
  onSignUp(){
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
      this.signupObj={
          userName: '',
          email:'',
          password: ''
      };
  }
  onLogin(){
      // debugger
      const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
      if (isUserExist != undefined) {
          alert('User Login Successfully');
      } else {
          alert('Wrong Credentials');
      }
  }
}