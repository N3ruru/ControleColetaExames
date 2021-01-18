import { Procedure } from './../procedure.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedureService } from '../procedure.service';

@Component({
  selector: 'app-procedure-create',
  templateUrl: './procedure-create.component.html',
  styleUrls: ['./procedure-create.component.css']
})
export class ProcedureCreateComponent implements OnInit {

  procedure: Procedure = {
    name: '',
    deadline: ''
  }

  constructor(private procedureService: ProcedureService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createProcedure(): void {
    this.procedureService.create(this.procedure).subscribe(() => {
      this.procedureService.showMessage('Procedimento Criado!')
      this.router.navigate(['/procedures'])
    })
  }
  cancel(): void {
    this.router.navigate(['/procedures'])
  }


}
