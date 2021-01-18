import { Procedure } from './../procedure.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcedureService } from '../procedure.service';

@Component({
  selector: 'app-procedure-update',
  templateUrl: './procedure-update.component.html',
  styleUrls: ['./procedure-update.component.css']
})
export class ProcedureUpdateComponent implements OnInit {

  procedure: Procedure

  constructor(private procedureService: ProcedureService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.procedureService.readById(id).subscribe(procedure => {
      this.procedure = procedure;
    });
  }

  updateProcedure(): void {
    this.procedureService.update(this.procedure).subscribe(() => {
      this.procedureService.showMessage('Procedimento Atualizado!');
      this.router.navigate(['/procedures']);
    })
  }
  cancel(): void {
    this.router.navigate(['/procedures']);
  }

}
