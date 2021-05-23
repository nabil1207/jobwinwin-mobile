import { Manager } from './../../classes/manager';
import { Recruiter } from 'src/app/core/models/classes';
import { Candidate, User } from '../../classes';

export interface Auth {
  user: User | Candidate | Recruiter | Manager;
  token: string;
  refreshToken: string;
}
