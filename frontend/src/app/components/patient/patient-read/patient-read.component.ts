import { Patient } from './../patient.model';
import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-read',
  templateUrl: './patient-read.component.html',
  styleUrls: ['./patient-read.component.css']
})
export class PatientReadComponent implements OnInit {

  patients: Patient[]
  displayedColumns = ['name', 'cpf', 'email' , 'action']

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.read().subscribe(patients =>{
      this.patients = patients
      console.log(patients)
    })
  }

}
