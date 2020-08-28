import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  acno="1001";
  pwd="userone";
  constructor(private router:Router,
    private dataService: DataService) { }

  acnoChange(event){
    this.acno = event.target.value;
  }

  pwdChange(event){
    this.pwd = event.target.value;
  }

  login(){
    var acno=parseInt(this.acno);
    var password=this.pwd;
    
    try {
        if(isNaN(acno)) throw "Invalid Account Number"
        if(acno.toString().length<2) throw "Account number must be atleast 4 characters"
    } catch (error) {
        alert(error)
    }

    var data=this.dataService.accountDetails;
    
    if (acno in data){
        var pwd = data[acno].password
        if (pwd==password){
            alert('Login Successful')
            // window.location.href="userhome.html"
            this.router.navigateByUrl("dashboard")
        }
        else{
            alert('Incorrect password')
        }
    }
    else{
        alert("Account No does not exists")
    }
  }
}