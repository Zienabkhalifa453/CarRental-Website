import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarApiService } from '../../Services/car-api.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars:any[]=[];
  currentPage: number = 1;
  constructor(private carService:CarApiService)
  {

  }
  ngOnInit() {
    this.fetchCarsByPage(this.currentPage);
  }

  fetchCarsByPage(page: number) {
    this.carService.getCarsByPage(page).subscribe((res) => {
      this.cars = res.message;
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchCarsByPage(page);
  }
}
