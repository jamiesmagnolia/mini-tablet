import { Component, OnInit } from '@angular/core';
import { BatteryService } from '../battery.service';


@Component({
  selector: 'app-battery-status',
  imports: [],
  templateUrl: './battery-status.component.html',
  styleUrl: './battery-status.component.scss'
})
export class BatteryStatusComponent implements OnInit {

  /**
   * Indicates current battery level.
   */
  batteryLevel: number | null = null;

  /**
   * Indicates charging status.
   */
  isCharging: boolean = false;

  constructor(private batteryService: BatteryService) {}

  /**
   * Asynchronous function to obtain battery level, apply on initialization.
   */
  async ngOnInit() {

    /**
     * Gets battery from battery service.
     */
    const battery = await this.batteryService.getBattery();

    if (battery) {
      this.updateBatteryStatus(battery); // Battery status is updated given that battery isn't null.
    }

    /**
     * Detect change in battery level and charging status. Update battery status accordingly.
     */
    battery.addEventListener('levelchange', () => this.updateBatteryStatus(battery));
    battery.addEventListener('chargingchange', () => this.updateBatteryStatus(battery));

  }

  /**
   * Private method to update battery status.
   * @param battery Supposedly a BatteryManager.
   */
  private updateBatteryStatus(battery: any) {
    this.batteryLevel = Math.round(battery.level * 100); // To obtain value based on percentage.
    this.isCharging = battery.charging;
  }

}
