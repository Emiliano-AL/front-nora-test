import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private _fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.userForm = this._fb.group({
      fisrtName: new FormControl('', [
        Validators.minLength(3), Validators.required
      ]),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordRepeat: new FormControl(''),
    });
  }

}
