import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'app/service/user-service.service';
import { FormGroup, FormControl,Validator, Validators, FormBuilder } from '@angular/forms';
declare var jQuery:any;
@Component({
  selector: 'app-list-of-user',
  templateUrl: './list-of-user.component.html',
  styleUrls: ['./list-of-user.component.css']
})
export class ListOfUserComponent implements OnInit {
  selectedUser: any;
  selectedindex: any;

  constructor(private service:UserServiceService,private formBuilder: FormBuilder) { }
  userForm: FormGroup;
 userlist:any;
 userlists= [];
 editFlag:boolean=false;



  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      bloodGroup: ['']
  });
   this.service.getMethod().subscribe(data => {
    this.userlist = JSON.parse(data._body);
    this.userlists=this.userlist.data
    });
}

addUSer(){
  this.userlists.push(this.userForm.value)
  this.close();
alert("User Added")

}

selectedUSer(index){
  this.selectedindex=index;
}
get f() { return this.userForm.controls; }
deleteUser(){
this.userlists.splice(this.selectedindex,1)
alert("User Deleted")
}

editUSer(user,index){
  this.selectedUser=user;
  this.editFlag=true;
  this.userForm.controls['firstName'].setValue(user.firstName);
  this.userForm.controls['lastName'].setValue(user.lastName);
  this.userForm.controls['address'].setValue(user.address);
  this.userForm.controls['bloodGroup'].setValue(user.bloodGroup);
}

updateUSer(){
  let user = this.selectedUser;
for(let i=0; i<this.userlists.length;i++){
   if(this.userlists[i].firstName==user.firstName){
     this.userlists[i] = this.userForm.value;
   }
}
this.close();
alert("User Updated")

}

close(){
  this.editFlag=false;
  jQuery("#myModal").modal("hide");
  this.userForm.reset();
}
 

}
