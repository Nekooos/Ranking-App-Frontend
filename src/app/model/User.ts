import { Competition } from './Competition';
import { Result } from './Result';

export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    competitions: Competition[];
    results: Result[];
}
