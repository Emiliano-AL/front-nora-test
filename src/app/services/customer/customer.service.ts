import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/User.interface';
import { Country } from 'src/app/interfaces/Country.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const baseUrl = `${environment.api_url}/User`;
const countriesUrl = environment.api_rest_countries;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private dummyClients:User[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  public _getClients(): Observable<User[]>{
    return this.http.get<User[]>(baseUrl);
  }

  public _getClient(idUser: number): Observable<User | null>{
    return this.http.get<User>(`${baseUrl}/${idUser}`);
  }

  public _saveUser(client: User){
    return this.http.post(baseUrl, client);
  }

  public _getCountries(): Promise<Country[]>{
    return this.http.get(countriesUrl)
      .pipe(
        map( (res: any ) => {
          return res.map( (item:any) => ({
              name: item.name,
              code: item.alpha2Code,
              capital: item.capital
            })
          )
        })
      ).toPromise();
  }
}
