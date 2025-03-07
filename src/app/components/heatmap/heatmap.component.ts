import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


interface HeatmapDay {
  date: string;
  percentage: number;
  color: string;
  dayOfWeek: number;
}

interface HeatmapWeek {
  weekNumber: number;
  days: HeatmapDay[];
}

@Component({
  selector: 'app-heatmap',
  imports: [CommonModule],
  templateUrl: './heatmap.component.html',
  styleUrl: './heatmap.component.css'
})

export class HeatmapComponent implements OnInit {
  @Input() taskCompletionData: { date: string, percentage: number }[] = [
    { date: '2024-03-01', percentage: 10 },
    { date: '2024-03-02', percentage: 50 },
    { date: '2024-03-03', percentage: 90 },
    { date: '2024-03-04', percentage: 20 },
    { date: '2024-03-05', percentage: 75 },
    { date: '2024-03-06', percentage: 30 },
    { date: '2024-03-07', percentage: 100 },
    { date: '2024-03-08', percentage: 40 },
    { date: '2024-03-09', percentage: 85 },
    { date: '2024-03-10', percentage: 5 },
    { date: '2024-03-11', percentage: 95 }, 
  ];; // Input from backend
  
  weeks: HeatmapWeek[] = [];

  ngOnInit() {
    this.generateHeatmap();
  }

  generateHeatmap() {
    const groupedByWeek = new Map<number, { date: string; percentage: number; dayOfWeek: number }[]>();

    this.taskCompletionData.forEach((day: { date: string; percentage: number }) => {
      const date = new Date(day.date);
      const weekNumber = this.getWeekNumber(date);
      const dayOfWeek = (date.getDay() + 6) % 7; // Monday = 0, Sunday = 6

      if (!groupedByWeek.has(weekNumber)) {
        groupedByWeek.set(weekNumber, []);
      }

      groupedByWeek.get(weekNumber)?.push({
        date: day.date,
        percentage: day.percentage,
        dayOfWeek
      });
    });

    this.weeks = Array.from(groupedByWeek.entries())
      .map(([weekNumber, days]) => ({
        weekNumber,
        days: days.map((d: { date: string; percentage: number; dayOfWeek: number }) => ({
          ...d,
          color: this.getColor(d.percentage)
        }))
      }))
      .sort((a, b) => b.weekNumber - a.weekNumber); // Newest weeks first
  }

  getColor(percentage: number): string {
    const red = Math.max(0, 255 - percentage * 2.55);
    const green = Math.min(255, percentage * 2.55);
    return `rgb(${red}, ${green}, 0)`;
  }

  getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDays = Math.floor((date.getTime() - firstDayOfYear.getTime()) / 86400000);
    return Math.ceil((pastDays + firstDayOfYear.getDay() + 1) / 7);
  }

  onDayClick(date: string | undefined) {
    if (date) {
      console.log(`Clicked on: ${date}`);
    }
  }

  findDay(week: HeatmapWeek, day: number): HeatmapDay | undefined {
    return week.days.find((d: HeatmapDay) => d.dayOfWeek === day);
  }

  hasDay(week: HeatmapWeek, day: number): boolean {
    return week.days.some((d: HeatmapDay) => d.dayOfWeek === day);
  }
}