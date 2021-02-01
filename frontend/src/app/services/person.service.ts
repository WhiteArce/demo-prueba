import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URI = 'http://localhost:3000/home';

@Injectable({
    providedIn: 'root'
})

export class PersonService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<any>{
        return this.http.get(URI);
    }
    get(id): Observable<any> {
        return this.http.get(`${URI}/${id}`);
    }

    create(data): Observable<any> {
        return this.http.post(URI, data);
    }

    update(id, data): Observable<any> {
        return this.http.put(`${URI}/${id}`,data);
    }
    
    delete(id): Observable<any> {
        return this.http.delete(`${URI}/${id}`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(URI);
    }

    findByName(nombre): Observable<any> {
        return this.http.get(`${URI}?nombre=${nombre}`);
    }
}