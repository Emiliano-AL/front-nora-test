import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/User.interface';
import { CustomerService } from '../../services/customer/customer.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import swal  from'sweetalert2';
import { ShowUserComponent } from '../../modals/show-user/show-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public userList: User[] = [];

  public userOne: User | null;

  /**
   * Auxiliar para obtener los modales.
   *
   * @type {BsModalRef}
   * @memberof AssignCouponComponent
   */
  public modalRef: BsModalRef;

  constructor(
    private _customerService: CustomerService,
    private modalService: BsModalService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this._customerService._getClients()
      .subscribe((users) => this.userList = users);

      console.log(this.userList);
  }

  public showUser(id: string){
    this._customerService._getClient(id)
      .subscribe( (user) => this.userOne = user );
    this.modalRef = this.modalService.show(ShowUserComponent,
      { initialState: { userToShow: this.userOne }}
    );
  }

  public editUser(id: string){
    console.log('show..');
    this.router.navigate([`customer/update/${id}`])
  }

  public deletUser(id: string){
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((res) => {
      if (res.isConfirmed) {
        console.log('Deletes');
        swal.fire('Success', 'Deleted user', 'success');
      }
    })
    console.log('show..');
  }

}
