import { Location } from './Location.interface';
export interface User {
    id:        number;
    firstName: string;
    lastName:  string;
    address:   string;
    location:  Location;
    email:     string;
    password:  string;
}

