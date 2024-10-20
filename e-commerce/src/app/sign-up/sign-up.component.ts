import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
constructor(private _AuthServiceService:AuthServiceService, private _Router:Router){}
registerForm: FormGroup= new FormGroup({
Email:new FormControl(null, [Validators.required, Validators.email]),
Password:new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$'
)]),
FName:new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
LName:new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
Phone:new FormControl(null, [Validators.required]),

})

handleRegister(registerForm:FormGroup){
  if(registerForm.valid){
  this._AuthServiceService.register(registerForm.value).subscribe({
   next:(data)=>{
    console.log(data)
    // if(data.message=="user created successfully"){
    // this._Router.navigate(['/login'])
    // }
   },
   error:(err)=>console.log("the error is"+err),
  })

  }
  console.log(registerForm);
  }

}

