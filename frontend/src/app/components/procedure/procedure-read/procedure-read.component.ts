import { Procedure } from './../procedure.model';
import { ProcedureService } from './../procedure.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure-read',
  templateUrl: './procedure-read.component.html',
  styleUrls: ['./procedure-read.component.css']
})
export class ProcedureReadComponent implements OnInit {

  procedures: Procedure[]
  displayedColumns = ['id', 'name', 'deadline' , 'action']

  constructor(private procedureService: ProcedureService) { }

  ngOnInit(): void {
    this.procedureService.read().subscribe(procedures =>{
      this.procedures = procedures
      console.log(procedures)
    })
  }

}
