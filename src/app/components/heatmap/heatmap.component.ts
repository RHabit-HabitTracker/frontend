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
    { date: '2025-01-01', percentage: 100},
    { date: '2025-03-01', percentage: 10 },
    { date: '2025-03-02', percentage: 50 },
    { date: '2025-03-03', percentage: 90 },
    { date: '2025-03-04', percentage: 20 },
    { date: '2025-03-05', percentage: 75 },
    { date: '2025-03-06', percentage: 30 },
    { date: '2025-03-07', percentage: 100 },
    { date: '2025-03-08', percentage: 40 },
    { date: '2025-03-09', percentage: 85 },
    { date: '2025-03-10', percentage: 5 },
    { date: '2025-03-11', percentage: 95 }, 
    { date: '2025-05-11', percentage: -5 },
    { date: '2025-12-31', percentage: 0},
    { date: '2020-05-03', percentage: 74},
    { date: '2023-01-02', percentage: 44},

  ];; // Input from backend
  weeks: HeatmapWeek[] = [];
  availableYears: number[] = [];
  selectedYear: number = new Date().getFullYear();

  ngOnInit() {
    this.findAvailableYears();
    this.generateHeatmap();
  }

  findAvailableYears() {
    const years = new Set<number>();
    this.taskCompletionData.forEach(day => {
      years.add(new Date(day.date).getFullYear());
    });
    this.availableYears = Array.from(years).sort((a, b) => b - a);
  }

  generateHeatmap() {
    this.weeks = [];

    // Start at first Monday of ISO week 1 of the selected year
    let currentDate = this.getFirstMondayOfISOWeek(this.selectedYear);
    
    // Generate weeks until we reach next year's first Monday
    let weekNumber = this.getISOWeekNumber(currentDate);
    while (currentDate.getFullYear() <= this.selectedYear) {
      const week: HeatmapWeek = { weekNumber, days: [] };

      // Fill the 7 days of the week
      for (let day = 0; day < 7; day++) {
        const dateString = currentDate.toISOString().split('T')[0];
        const recordedDay = this.taskCompletionData.find(d => d.date === dateString);
        
        week.days.push({
          date: dateString,
          percentage: recordedDay ? recordedDay.percentage : 0,
          dayOfWeek: day,
          color: recordedDay ? this.getColor(recordedDay.percentage) : '#404040'
        });

        currentDate.setDate(currentDate.getDate() + 1); // Move to next day
      }

      this.weeks.push(week);
      weekNumber = this.getISOWeekNumber(currentDate);
    }
  }

  getColor(percentage: number): string {
    if (percentage === 100) {
      return '#00A651'; // Green
    } else if (percentage >= 90) {
      return '#FFD700'; // Yellow
    } else if (percentage >= 50) {
      return '#FFA500'; // Orange
    } else if (percentage > 0) {
      return '#FF4500'; // Red-Orange
    }
    return '#404040'; // Dark grey for missing data
  }

  getISOWeekNumber(date: Date): number {
    const tempDate = new Date(date.getTime());
    tempDate.setUTCHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7)); // Move to Thursday
    const firstThursday = new Date(tempDate.getFullYear(), 0, 4);
    return Math.ceil(((tempDate.getTime() - firstThursday.getTime()) / 86400000 + 1) / 7);
  }

  getFirstMondayOfISOWeek(year: number): Date {
    const fourthJan = new Date(year, 0, 4);
    const dayOfWeek = fourthJan.getDay();
    const offset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Adjust to Monday
    return new Date(year, 0, 4 + offset);
  }

  onDayClick(day: HeatmapDay) {
    if (day.date) {
      console.log(`Date: ${this.formatDate(day.date)} | ${day.percentage > 0 ? `Tasks Completed: ${day.percentage}%` : 'No tasks recorded'}`);
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE'); // Formats as DD.MM.YYYY
  }

  changeYear(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement)?.value;
    if (selectedValue) {
      this.selectedYear = parseInt(selectedValue, 10);
      this.generateHeatmap();
    }
  }
}