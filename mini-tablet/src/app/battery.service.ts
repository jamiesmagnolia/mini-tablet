import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {

  constructor() { }


  async getBattery() {

    if ('getBattery' in navigator) {
      return (navigator as any).getBattery();
    }
    return null;
  }

}
