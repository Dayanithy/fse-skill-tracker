import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ProfileTableComponent } from './profile-table/profile-table.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProfileTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTableModule,
  ]
})
export class AdminModule { }
