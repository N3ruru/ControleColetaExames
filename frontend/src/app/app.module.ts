import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component'

import { MatCardModule } from '@angular/material/card';
import { PatientCrudComponent } from './views/patient-crud/patient-crud.component';
import { ProcedureCrudComponent } from './views/procedure-crud/procedure-crud.component';
import { ExamCrudComponent } from './views/exam-crud/exam-crud.component';
import { ForDirective } from './directives/for.directive';
import { PatientCreateComponent } from './components/patient/patient-create/patient-create.component';
import { ProcedureCreateComponent } from './components/procedure/procedure-create/procedure-create.component';
import { ExamCreateComponent } from './components/exam/exam-create/exam-create.component'
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PatientReadComponent } from './components/patient/patient-read/patient-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProcedureReadComponent } from './components/procedure/procedure-read/procedure-read.component';
import { ExamReadComponent } from './components/exam/exam-read/exam-read.component';
import { PatientUpdateComponent } from './components/patient/patient-update/patient-update.component';
import { ProcedureUpdateComponent } from './components/procedure/procedure-update/procedure-update.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PatientCrudComponent,
    ProcedureCrudComponent,
    ExamCrudComponent,
    ForDirective,
    PatientCreateComponent,
    ProcedureCreateComponent,
    ExamCreateComponent,
    PatientReadComponent,
    ProcedureReadComponent,
    ExamReadComponent,
    PatientUpdateComponent,
    ProcedureUpdateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
