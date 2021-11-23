import { FormGroup } from '@angular/forms';

export function ConfirmedValidator(contrlName: string, matchingCtrlName: string){
  return (formGroup: FormGroup )  => {
    const control = formGroup.controls[contrlName];
    const matchingCtrl = formGroup.controls[matchingCtrlName];
    if(matchingCtrl.errors && !matchingCtrl.errors.confirmedValidator ) return;

    if (control.value !== matchingCtrl.value) {
      matchingCtrl.setErrors({ confirmedValidator: true });
    } else {
      matchingCtrl.setErrors(null);
    }
   }
}
