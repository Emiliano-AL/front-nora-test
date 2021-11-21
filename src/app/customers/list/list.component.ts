import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User.interface';
import { CustomerService } from 'src/app/services/customer/customer.service';

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
    console.log('show..');
  }

}
