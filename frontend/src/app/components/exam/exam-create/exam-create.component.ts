import { Exam } from './../exam.model';
import { ExamService } from './../exam.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exam-create',
  templateUrl: './exam-create.component.html',
  styleUrls: ['./exam-create.component.css']
})
export class ExamCreateComponent implements OnInit {

  exam: Exam = {
    patientId: null,
    proceduresIds: null,
    collectionDate: null

  }


  constructor(private examService: ExamService,
    private router: Router) { }

  ngOnInit(): void {



  }

  createExam(): void {
    for(var i = 0; i < this.exam.proceduresIds.length; i++)
    { 
      if(this.exam.proceduresIds[i]==','){
        console.log(this.exam.proceduresIds[i-1])
      }        
    }
      this.examService.create(this.exam).subscribe(() => {
      this.examService.showMessage('Exame Agendado!')
      this.router.navigate(['/exams'])
    })
  }

  cancel(): void {
    this.router.navigate(['/exams'])
  }

}

