import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure-crud',
  templateUrl: './procedure-crud.component.html',
  styleUrls: ['./procedure-crud.component.css']
})
export class ProcedureCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProcedureCreate(): void{
    this.router.navigate(['/procedures/create'])
  }

}
