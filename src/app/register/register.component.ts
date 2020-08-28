import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name="";
  acno="";
  pwd="";
  pin="";
  constructor(private dataService:DataService,
    private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    const result = this.dataService.register(this.name,this.acno,this.pin,this.pwd);
    if(result){
      alert("Successfully created account. Please login");
      this.router.navigateByUrl("");
    }
  }

}
