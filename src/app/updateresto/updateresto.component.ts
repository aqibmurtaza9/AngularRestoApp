import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateresto',
  templateUrl: './updateresto.component.html',
  styleUrls: ['./updateresto.component.css']
})
export class UpdaterestoComponent implements OnInit {

  editResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private router:ActivatedRoute, private resto:RestoService) { }


  ngOnInit(): void {
         console.log(this.router.snapshot.params.id)
         this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result) => {
             console.warn(result)
          this.editResto=new FormGroup({
            name: new  FormControl(''),
            address: new FormControl(''),
            email: new FormControl('')
          })

         })
    
   }

}
