import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/admin/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }


    login(user: IUser): Observable<any> {
        return this.http.post('', user);

    }

    logout() {

    }

    get token() {
        return '';
    }

    private setToken() {

    }

    isAuth(): boolean {
        return !!this.token;
    }
}
