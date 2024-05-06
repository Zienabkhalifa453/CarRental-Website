import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule], 
  templateUrl:'./payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {
  payment: any = {};

  submitPaymentForm() {
    console.log('Payment details:', this.payment);
   
  }
}