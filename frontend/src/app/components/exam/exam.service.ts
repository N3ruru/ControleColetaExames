import { HttpClient } from '@angular/common/http';
import { Exam } from './exam.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExamService {

  baseUrl = "http://localhost:3001/exams"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.baseUrl, exam)
  }
  read(): Observable<Exam[]>{
    return this.http.get<Exam[]>(this.baseUrl);
  }
}

