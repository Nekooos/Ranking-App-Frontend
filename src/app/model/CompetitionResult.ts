import { Competition } from './Competition';
import { User } from './User';

export class CompetitionResult {
    //userId
    id: string;
    result_id: string;
    discipline: string;
    reported_performance: string;
    announced_performance: string;
    points: string;
    card: string;
    remarks: string;
    user: User;
    competition: Competition;
    day: Number;
    first_name: string;
    last_name: String;
    position: number;
}