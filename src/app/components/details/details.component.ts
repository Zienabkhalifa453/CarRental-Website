import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarApiService } from '../../Services/car-api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})


export class DetailsComponent implements OnInit {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.carService.getCarById(id).subscribe(res => {
        this.car = res.message;
        console.log(this.car)
      });
    });
  }
}
