import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  constructor(private resto:RestoService) { }
  register = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  ngOnInit(): void {
  }
 
  collection(){
    console.warn(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((result)=>{
       console.warn(result);
       this.alert=true;
       this.register.reset({})
    })
  }
  closeAlert(){
    this.alert=false;
  }

}
