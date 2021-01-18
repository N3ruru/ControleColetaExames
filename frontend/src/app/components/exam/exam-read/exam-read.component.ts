import { Exam } from './../exam.model';
import { ExamService } from './../exam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-read',
  templateUrl: './exam-read.component.html',
  styleUrls: ['./exam-read.component.css']
})
export class ExamReadComponent implements OnInit {

  exams: Exam[]
  displayedColumns = ['id', 'collectionDate', 'resultsDate' ]

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.examService.read().subscribe(exams =>{
      this.exams = exams
      console.log(exams)
    })
  }

}
