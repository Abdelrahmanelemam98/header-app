import { Component } from '@angular/core';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-categor-list',
  templateUrl: './categor-list.component.html',
  styleUrls: ['./categor-list.component.scss'],
})
export class CategorListComponent {
  categoryList: any[] = [];

  constructor(private categoryServices: CategoryServiceService) {}
  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryServices.getAllCategories().subscribe((data) => {
      const category = data || [];
      this.categoryList = category;
    });
  }
}
