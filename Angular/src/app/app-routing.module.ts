import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  { path: '', component: HomeComponent, pathMatch:"full" },
  { path: 'add', component: AddAnnouncementComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
