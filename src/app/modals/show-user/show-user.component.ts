import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User.interface';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  public userToShow: User | null;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  public close(){
    this.bsModalRef.hide();
  }
}
