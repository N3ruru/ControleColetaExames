import { Patient } from './../patient.model';
import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  patient: Patient = {
    name: '',
    cpf: null,
    email: ''

  }

  constructor(private patientService: PatientService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createPatient(): void {
    this.patientService.create(this.patient).subscribe(() => {
      this.patientService.showMessage('Paciente Cadastrado!')
      this.router.navigate(['/patients'])
    })
  }

  cancel(): void {
    this.router.navigate(['/patients'])
  }

}
