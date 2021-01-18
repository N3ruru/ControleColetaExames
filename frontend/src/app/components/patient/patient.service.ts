import { Patient } from './patient.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar }from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl = "http://localhost:3001/patients"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrl, patient)
  }
  read(): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.baseUrl);
  }

  readById(id: string): Observable<Patient>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Patient>(url);
  }

  update(patient: Patient): Observable<Patient>{
    const url = `${this.baseUrl}/${patient.id}`
    return this.http.put<Patient>(url, patient);
  }
}
