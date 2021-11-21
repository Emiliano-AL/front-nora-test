import { Location } from './Location.interface';
export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    address:   string;
    location:  Location;
    email:     string;
    password:  string;
}

