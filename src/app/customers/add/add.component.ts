import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../helpers/confirmed.validator';
import swal  from'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public userForm: FormGroup;
  public submited: boolean;

  constructor(private _fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.submited = false;
    this.initForm();
  }

  private initForm(){
    this.userForm = this._fb.group({
      fisrtName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',  Validators.required),
      passwordRepeat: new FormControl('',  Validators.required),
    }, { validators: ConfirmedValidator('password', 'passwordRepeat') });
  }

  get f(){
    return this.userForm.controls;
  }

  public save(){
    this.submited = true;
    if(this.userForm.valid){
      console.log('Save users');
    }
    console.log(this.userForm.value);
    swal.fire('Success', 'Registered user', 'success');
  }
}
//  *ngIf="f.fisrtName.touched && f.fisrtName.errors?.required"