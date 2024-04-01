import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() selectedCategoryEmitter = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  CategoryClicked(category:string){
    this.selectedCategoryEmitter.emit(category);
  }

}
