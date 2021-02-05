import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersona } from '../tasks/persona.model';


@Injectable({
    providedIn: 'root'
})

export class PersonService {
    URL: string = 'http://localhost:3000'
    constructor(private http: HttpClient) { }

  

    getPersonas(): Observable<any> {
        return this.http.get<IPersona>(`${this.URL}`);
    }

    createPersona(persona: IPersona): Observable<any> {
        return this.http.post<IPersona>(`${this.URL}`, persona);
    }

    deletePersona(id): Observable<any>{
        return this.http.delete<IPersona>(`${this.URL}/${id}`);
    }

     updatePersona(id, data: IPersona): Observable<any> {
        return this.http.put<IPersona>(`${this.URL}/${id}`, data);
     }
    

}