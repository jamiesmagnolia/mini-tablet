import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BatteryStatusComponent } from "../battery-status/battery-status.component";

@Component({
  selector: 'app-footer',
  imports: [DatePipe, BatteryStatusComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  currentDateTime: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

}
