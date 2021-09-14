import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


export function matchedPasswordsValidator(pass: string): ValidatorFn {
  return (control2: AbstractControl): ValidationErrors | null => {
    const isMatched:boolean = control2.dirty && (pass != control2.value);
    return isMatched ? {inMatched: true} : null;
  };
}
