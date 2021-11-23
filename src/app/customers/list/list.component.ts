import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User.interface';
import { CustomerService } from 'src/app/services/customer/customer.service';
import swal  from'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public userList: User[] = [];

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this._customerService._getClients()
      .subscribe((users) => this.userList = users);

      console.log(this.userList);
  }

  public showUser(id: string){
    console.log('show..');
  }

  public editUser(id: string){
    console.log('show..');
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
