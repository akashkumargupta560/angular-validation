import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from './validation/passwordValidation'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  studenForm!: FormGroup;
  dataArray: any[] = [];
  // phonePattern="[0-9\-\+\(\)\s]+"; 
  emailPattern = "^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$";
  // passwordPattern ='^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';
  passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  phonePattern = "^[0-9]*$";
  constructor(private formbuilder: FormBuilder, private route: Router) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {

    this.studenForm = this.formbuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, passwordValidator]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(this.phonePattern)]],
      image: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });
   
  }

  get f() { return this.studenForm.controls; }
  get password() { return this.studenForm.get('password'); }

  submitForm() {
    console.log("form:-", this.studenForm.value);

    if (this.studenForm.valid) {
      // this.dataArray.push(this.studenForm.value);
      localStorage.setItem('student-data', JSON.stringify(this.studenForm.value));
      this.studenForm.reset();
    }else{
      this.studenForm.markAllAsTouched();
    }
  }

}
