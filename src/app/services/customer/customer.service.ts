import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/User.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private dummyClients:User[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this.dummyClients.push({
      id: "aasd",
      address: "San Lazaro 9-a frac.",
      email: "emiliano.0218@gmail.com",
      firstName: "Emiliano",
      lastName: "Landa",
      password: "asdasdadasd",
      location: {
        country: "Mexico",
        state: "Veracruz"
      }
    });
    this.dummyClients.push({
      id: "asdasd",
      address: "San Lazaro 9-a frac.",
      email: "ariadna.0218@gmail.com",
      firstName: "Ariadna",
      lastName: "Anastasio",
      password: "asdasdadasd",
      location: {
        country: "Mexico",
        state: "Veracruz"
      }
    });
    this.dummyClients.push({
      id: "qweqwe",
      address: "San Lazaro 9-a frac.",
      email: "lupita.0218@gmail.com",
      firstName: "Maria",
      lastName: "Diaz",
      password: "asdasdadasd",
      location: {
        country: "Mexico",
        state: "Veracruz"
      }
    });
  }



  public _getClients(): Observable<User[]>{
    const listUser: User[] = this.dummyClients;
    return   of<User[]>(listUser)
  }
}
