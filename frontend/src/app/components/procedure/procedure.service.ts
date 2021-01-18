import { HttpClient } from '@angular/common/http';
import { Procedure } from './procedure.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  baseUrl = "http://localhost:3001/procedures"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(procedure: Procedure): Observable<Procedure> {
    return this.http.post<Procedure>(this.baseUrl, procedure)
  }
  read(): Observable<Procedure[]>{
    return this.http.get<Procedure[]>(this.baseUrl);
  }

  readById(id: string): Observable<Procedure>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Procedure>(url);
  }

  update(procedure: Procedure): Observable<Procedure>{
    const url = `${this.baseUrl}/${procedure.id}`
    return this.http.put<Procedure>(url, procedure);
  }
}
