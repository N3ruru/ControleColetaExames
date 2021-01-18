import { Patient } from './../patient.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  patient: Patient

  constructor(private patientService: PatientService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.patientService.readById(id).subscribe(patient => {
      this.patient = patient;
    });
  }

  updatePatient(): void {
    this.patientService.update(this.patient).subscribe(() => {
      this.patientService.showMessage('Paciente Atualizado!');
      this.router.navigate(['/patients']);
    })
  }
  cancel(): void {
    this.router.navigate(['/patients']);
  }

}
