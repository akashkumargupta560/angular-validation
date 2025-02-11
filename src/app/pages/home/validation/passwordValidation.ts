import { AbstractControl,ValidationErrors } from "@angular/forms";

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const errors: ValidationErrors ={};

    if(!/[a-z]/.test(value)){
        errors['lowercase'] = 'Password must contain at least one lowercase letter.';
    }
    if (!/[A-Z]/.test(value)) {
        errors['uppercase'] = 'Password must contain at least one uppercase letter.';
      }
      if (!/[0-9]/.test(value)) {
        errors['number'] = 'Password must contain at least one number.';
      }
      if (!/[@$!%*?&]/.test(value)) {
        errors['specialChar'] = 'Password must contain at least one special character (@$!%*?&).';
      }
      if (value?.length < 8) {
        errors['minLength'] = 'Password must be at least 8 characters long.';
      }
    
      return Object.keys(errors).length ? errors : null;
}