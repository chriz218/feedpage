import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private apiUrl: string;
    private token: string;
    
    constructor(private http: HttpClient) { 
        this.apiUrl = environment.API_URL;
        this.token = environment.TOKEN;
    }

    public getProfiles(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'Bearer ' + this.token
            })
        };
        return this.http.get<any>(this.apiUrl, httpOptions).pipe(take(1));
    }

}