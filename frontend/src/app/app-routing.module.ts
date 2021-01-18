import { ExamCreateComponent } from './components/exam/exam-create/exam-create.component';
import { ProcedureCreateComponent } from './components/procedure/procedure-create/procedure-create.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PatientCrudComponent } from './views/patient-crud/patient-crud.component';
import { ProcedureCrudComponent } from './views/procedure-crud/procedure-crud.component';
import { ExamCrudComponent } from './views/exam-crud/exam-crud.component';
import { PatientCreateComponent } from './components/patient/patient-create/patient-create.component';
import { PatientUpdateComponent } from './components/patient/patient-update/patient-update.component';
import { ProcedureUpdateComponent } from './components/procedure/procedure-update/procedure-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "patients",
    component: PatientCrudComponent
  },
  {
    path: "procedures",
    component: ProcedureCrudComponent
  },
  {
    path: "exams",
    component: ExamCrudComponent
  },
  {
    path: "patients/create",
    component: PatientCreateComponent
  },
  {
    path: "procedures/create",
    component: ProcedureCreateComponent
  },
  {
    path: "exams/create",
    component: ExamCreateComponent
  },
  {
    path: "patients/update/:id",
    component: PatientUpdateComponent
  },
  {
    path: "procedures/update/:id",
    component: ProcedureUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
