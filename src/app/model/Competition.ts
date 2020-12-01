import { Result } from './Result';
import { User } from './User';

export class Competition {
    id: string;
    name: string;
    country: string;
    city: string;
    location: string;
    date: string;
    endDate: String;
    eventType: string;
    users: User[];
    results: Result[];
    competition: Competition[];
}