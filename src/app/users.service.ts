import { User } from './app.model';
import { default as data } from '../data.json';

export class UsersService {
  getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, 0);
    });
  }
}
