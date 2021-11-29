import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../helpers/confirmed.validator';
import swal  from'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer/customer.service';
import { User } from '../../interfaces/User.interface';
import { Country } from '../../interfaces/Country.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public userForm: FormGroup;
  public submited: boolean;

  /**
   * Enable the edition mode.
   */
  public edition: boolean;

  /**
   * In edition mode id of the template.
   */
  private _modelId: number;

  public userOne: User | null;

  public countriesList: Country[];

  constructor(private _fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _customerService: CustomerService,
    ) { }

  async ngOnInit(): Promise<void> {
    this.submited = false;
    this.activatedRoute.params.subscribe(params => {
      this._modelId = params.id;
    });
    this.edition = this._modelId ? true : false;
    this.initForm();

    await this.loadCountries();
    if(this.edition)
      this.loadModel();
  }

  private async loadCountries(){
    this.countriesList = await this._customerService._getCountries();
  }

  private loadModel(){
    this._customerService._getClient(this._modelId)
      .subscribe( (user) => this.userOne = user );
    this.userForm.reset(this.userOne);
  }

  private initForm(){
    this.userForm = this._fb.group({
      firstName: new FormControl('', Validators.required),
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
      this._customerService._saveUser(this.userForm.value)
        .subscribe( res => {
          console.log(res);
           swal.fire('Success', 'Registered user', 'success');
        });
    }
    console.log(this.userForm.value);

  }

  selectEvent(item: Country) {
    console.log('selected: ', item);
    this.userForm.get('country')?.setValue(item.name)

  }
}