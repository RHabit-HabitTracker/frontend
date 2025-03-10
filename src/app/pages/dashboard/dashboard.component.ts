import { Component } from '@angular/core';
import { HeatmapComponent } from "../../components/heatmap/heatmap.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeatmapComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
