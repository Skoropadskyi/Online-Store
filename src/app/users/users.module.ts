import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ScoreComponent } from './score/score.component';
import { AdsComponent } from './ads/ads.component';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MatCardModule,
    MatRadioModule
  ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        ScoreComponent,
        AdsComponent
    ]
})
export class UsersModule { }
