import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable, of } from 'rxjs';
import { AuthStatus, User } from '../interfaces';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly baseUrl: string = environment.baseUrl;
	private http = inject(HttpClient);
	private_currentUser = signal<User | null>(null);
	private _authStatus = signal<AuthStatus>(AuthStatus.cheking);

	constructor() {}

	login(email: string, password: string): Observable<boolean> {
		return of(true);
	}
}
