import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-updateresto',
  templateUrl: './updateresto.component.html',
  styleUrls: ['./updateresto.component.css']
})
export class UpdaterestoComponent implements OnInit {


  constructor(private resto:RestoService) { }

  addResto=new FormGroup({
  name:new FormControl(''),
  address:new FormControl(''),
  email:new FormControl('')
})


  ngOnInit(): void {

  }

}
