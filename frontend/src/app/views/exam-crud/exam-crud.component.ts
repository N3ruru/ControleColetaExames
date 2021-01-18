import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-crud',
  templateUrl: './exam-crud.component.html',
  styleUrls: ['./exam-crud.component.css']
})
export class ExamCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToExamCreate(): void{
    this.router.navigate(['/exams/create'])
  }

}
