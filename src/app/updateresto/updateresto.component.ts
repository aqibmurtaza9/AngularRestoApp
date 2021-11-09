import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';
import { ListRestoComponent } from '../list-resto/list-resto.component';

@Component({
  selector: 'app-updateresto',
  templateUrl: './updateresto.component.html',
  styleUrls: ['./updateresto.component.css']
})
export class UpdaterestoComponent implements OnInit {
alert:boolean=false;
  editResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private router:ActivatedRoute, private resto:RestoService) { }
collect:any={};

  ngOnInit(): void {
         console.log(this.router.snapshot.params.id)
         this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result) => {
            this.collect=result;  //bypass
          // console.warn(result)

          this.editResto=new FormGroup({
            name: new  FormControl(this.collect.name),
            address: new FormControl(this.collect.address),
            email: new FormControl(this.collect.email)
          })

         })
        
   }

   collection(){
    //console.warn("item",this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
            console.warn("result",result)
    });
    this.alert=true;
   }

   closeAlert(){
     this.alert=false;
   }
}
