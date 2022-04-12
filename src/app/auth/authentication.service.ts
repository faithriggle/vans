import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject} from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AuthenticationResponse } from "./authResponse";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndpoint:string = "signUp";
    signInEndpoint:string = "signInWithPassword"
    private user:Subject<User> = new Subject<User>();

    public constructor(private http:HttpClient) {
        
    }

    public signup(email:string, password:string) {
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };
        return this.http.post<AuthenticatorResponse>(this.baseUrl + ":" + this.signUpEndpoint + "?" + 
            "key=" + environment.firebase.apiKey, requestBody);
    }

    public login(email:string, password:string) {
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        };

        return this.http.post(this.baseUrl +":" + this.signInEndpoint + "?" + 
        "key=" + environment.firebase.apiKey, requestBody).pipe(
            tap(
                
            )
        );
    }
}