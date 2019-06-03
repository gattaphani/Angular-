import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Templateform } from './templateform.model'

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent  
{
templateform : Templateform[]
obj:any;
obj1:any;
obj2:any;
  
  form:any;

  UserName: any;
  Email: any;
  NickName: any;
  Password: any;
  Gender: any;




  userfield:any;
  emailfield:any;
  namefield:any;
  passwordfield:any;
  genderfield: any;
  coursefield: any;
 

  isEditable:boolean = false;

  public formData:any=[];
  isEmpty: boolean;
  
  public CourseName:any=
  [
    {id:1, name: "MBA"},
    {id:2, name: "MCA"},
    {id:3, name: "B TECH"},
    {id:4, name: "M TECH"},
    {id:5, name: "PG"}
  ];
  courseselected: any;
  public GenderSelect:any=
  [
    {id:1, name: "Male"},
    {id:2, name: "Female"},
    {id:3, name: "Others"}, 
  ];
  genderselected:any;
   
  
  

constructor()
{

}


post()
{ 

 this.obj=
 {
  "userName" : this.obj.UserName,
  "email" : this.obj.Email,
  "nickName" : this.obj.NickName,
  "password" : this.obj.Password,
  "gender" : this.obj.genderselected,
  "course" : this.obj.courseselected

 }
 this.formData.push(this.obj);
console.log(this.obj);
this.default();
this.isEmpty=true;
}

  onSubmit(form: NgForm) 
  {
    // form['course']=this.CourseName[]
    if (form.valid) 
    {
      console.log(form.value);
    }
  }

  delete(index)
  {
    this.formData.splice(index,1);
  }
  onChange(coursename)
   {
    this.courseselected=coursename;
    console.log("Selected Value",this.courseselected);
   }

   onChangeGender(selectegender)
   {
    this.genderselected=selectegender;
    console.log("Selected Gender",this.genderselected);
   }

   


  // save(list)
  // {
  //   console.log(list);
  // this.UserName = list.userName;
  // this.Email = list.email;
  // this.NickName = list.nickName;
  // this.Password = list.password;
  // }

  update()
  {
    var obj1 = 
    {
      "userName":this.userfield,
      "email":this.emailfield,
      "nickName":this.namefield,
      "password":this.passwordfield,
      "gender" : this.genderfield,
      "course" : this.coursefield
    }
    console.log(this.obj1);
  }

  default()
  {
    this.obj=
 {
  "UserName":"",
  "Email" : "",
  "NickName" : "",
  "Password" : "",
  "Gender" : "",
  "Course" : ""

 }
  }
}
