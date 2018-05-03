import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {Observable} from 'rxjs';

let _users: User[] = [
    {
        id: 1,
        name: 'Danilint',
        email: 'danilint@lemoncode.com',
        phone: 555746499
    },
    {
        id: 2,
        name: 'terminatr',
        email: 'terminatr@lemoncode.com',
        phone: 555722277
    },
    {
        id: 3,
        name: 'Lemon',
        email: 'lemon@lemoncode.net',
        phone: 555111999
    },
];

@Injectable()
export class UserService {
    // TODO: Use an observable.
    getUser(userId: number): User {
        return _users.find(u => u.id === userId);
    }

    loadUsers(): User[] {
        return _users;
    }

    deleteUser(userId: number) {
        const index = _users.findIndex(u => u.id === userId);
        if (index > -1) {
            _users = [
                ..._users.slice(0, index),
                ..._users.slice(index + 1),
            ];
        }
    }

    addUser(user: User) {
        user.id = this.getId();
        _users = [..._users, user];
    }

    private getId = (): number => Date.now();

    updateUser(user: User) {
        _users = _users.map((u) => {
            if (u.id !== user.id) {
                return u;
            }
            return {
                ...u,
                ...user
            };
        });
    }

    errorHandler() {
        // TODO: Add error handler.
    }
}
