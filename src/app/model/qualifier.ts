import { User } from './User';

export class Qualifier {
    id: number;
    name: string;
    timeToQualify: string;
    users: User[];
}