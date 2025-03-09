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
    { date: '2020-05-03', percentage: 74 },
{ date: '2020-06-15', percentage: 32 },
{ date: '2020-08-20', percentage: 56 },
{ date: '2021-02-28', percentage: 87 },
{ date: '2021-04-17', percentage: 19 },
{ date: '2021-06-30', percentage: 65 },
{ date: '2021-07-22', percentage: 47 },
{ date: '2022-01-10', percentage: 91 },
{ date: '2022-03-03', percentage: 15 },
{ date: '2022-05-05', percentage: 78 },
{ date: '2022-08-17', percentage: 53 },
{ date: '2023-01-01', percentage: 44 },
{ date: '2023-02-14', percentage: 36 },
{ date: '2023-03-09', percentage: 82 },
{ date: '2023-04-22', percentage: 60 },
{ date: '2023-06-11', percentage: 100 },
{ date: '2023-07-24', percentage: 9 },
{ date: '2023-09-05', percentage: 72 },
{ date: '2024-01-01', percentage: 54 },
{ date: '2024-02-18', percentage: 41 },
{ date: '2024-04-12', percentage: 29 },
{ date: '2024-05-23', percentage: 94 },
{ date: '2024-07-15', percentage: 67 },
{ date: '2024-09-01', percentage: 52 },
{ date: '2025-01-01', percentage: 100 },
{ date: '2025-02-19', percentage: 30 },
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
{ date: '2025-04-20', percentage: 63 },
{ date: '2025-05-15', percentage: 21 },
{ date: '2025-06-18', percentage: 59 },
{ date: '2025-07-22', percentage: 85 },
{ date: '2025-08-30', percentage: 77 },
{ date: '2025-09-10', percentage: 8 },
{ date: '2025-09-25', percentage: 92 },
{ date: '2025-10-14', percentage: 47 },
{ date: '2025-11-05', percentage: 63 },
{ date: '2025-12-12', percentage: 50 },
{ date: '2026-01-22', percentage: 90 },
{ date: '2026-03-01', percentage: 30 },
{ date: '2026-03-15', percentage: 14 },
{ date: '2026-04-10', percentage: 33 },
{ date: '2026-05-04', percentage: 73 },
{ date: '2026-06-20', percentage: 61 },
{ date: '2026-07-12', percentage: 21 },
{ date: '2026-08-17', percentage: 58 },
{ date: '2026-09-29', percentage: 13 },
{ date: '2026-10-06', percentage: 71 },
{ date: '2026-11-15', percentage: 43 },
{ date: '2026-12-22', percentage: 26 },
{ date: '2027-01-03', percentage: 94 },
{ date: '2027-02-08', percentage: 11 },
{ date: '2027-03-10', percentage: 72 },
{ date: '2027-04-25', percentage: 50 },
{ date: '2027-06-01', percentage: 84 },
{ date: '2027-07-13', percentage: 48 },
{ date: '2027-08-19', percentage: 61 },
{ date: '2027-09-05', percentage: 90 },
{ date: '2027-09-30', percentage: 22 },
{ date: '2027-10-22', percentage: 77 },
{ date: '2027-11-05', percentage: 41 },
{ date: '2027-12-25', percentage: 17 },
{ date: '2028-01-09', percentage: 99 },
{ date: '2028-03-04', percentage: 61 },
{ date: '2028-04-10', percentage: 44 },
{ date: '2028-05-24', percentage: 18 },
{ date: '2028-07-14', percentage: 56 },
{ date: '2028-08-23', percentage: 30 },
{ date: '2028-09-09', percentage: 68 },
{ date: '2028-10-11', percentage: 41 },
{ date: '2028-11-25', percentage: 85 },
{ date: '2028-12-03', percentage: 33 },
{ date: '2029-01-22', percentage: 29 },
{ date: '2029-02-28', percentage: 87 },
{ date: '2029-03-07', percentage: 14 },
{ date: '2029-04-05', percentage: 92 },
{ date: '2029-05-11', percentage: 65 },
{ date: '2029-06-13', percentage: 45 },
{ date: '2029-07-21', percentage: 22 },
{ date: '2029-08-17', percentage: 96 },
{ date: '2029-09-01', percentage: 57 },
{ date: '2029-10-13', percentage: 79 },
{ date: '2029-11-27', percentage: 66 },
{ date: '2029-12-30', percentage: 77 },
{ date: '2030-01-14', percentage: 51 },
{ date: '2030-02-25', percentage: 89 },
{ date: '2030-03-18', percentage: 9 },
{ date: '2030-04-12', percentage: 99 },
{ date: '2030-06-04', percentage: 60 },
{ date: '2030-07-29', percentage: 35 },
{ date: '2030-08-03', percentage: 74 },
{ date: '2030-09-17', percentage: 83 },
{ date: '2030-10-21', percentage: 53 },
{ date: '2030-11-12', percentage: 48 },
{ date: '2030-12-05', percentage: 79 },
{ date: '2031-01-15', percentage: 65 },
{ date: '2031-03-02', percentage: 18 },
{ date: '2031-04-10', percentage: 56 },
{ date: '2031-05-19', percentage: 29 },
{ date: '2031-06-22', percentage: 83 },
{ date: '2031-07-09', percentage: 21 },
{ date: '2031-08-16', percentage: 64 },
{ date: '2031-09-28', percentage: 43 },
{ date: '2031-10-10', percentage: 57 },
{ date: '2031-11-22', percentage: 79 },
{ date: '2031-12-09', percentage: 33 },
{ date: '2032-01-17', percentage: 73 },
{ date: '2032-03-13', percentage: 95 },
{ date: '2032-04-28', percentage: 82 },
{ date: '2032-06-03', percentage: 90 },
{ date: '2032-07-11', percentage: 40 },
{ date: '2032-08-22', percentage: 13 },
{ date: '2032-09-17', percentage: 88 },
{ date: '2032-10-04', percentage: 56 },
{ date: '2032-11-23', percentage: 41 },
{ date: '2032-12-14', percentage: 55 },
{ date: '2033-01-25', percentage: 31 },
{ date: '2033-03-17', percentage: 83 },
{ date: '2033-04-02', percentage: 73 },
{ date: '2033-05-19', percentage: 60 },
{ date: '2033-06-25', percentage: 98 },
{ date: '2033-08-08', percentage: 76 },
{ date: '2033-09-04', percentage: 54 },
{ date: '2033-10-17', percentage: 61 },
{ date: '2033-11-10', percentage: 44 },
{ date: '2033-12-29', percentage: 62 },
{ date: '2034-01-04', percentage: 20 },
{ date: '2034-03-03', percentage: 90 },
{ date: '2034-04-12', percentage: 49 },
{ date: '2034-05-20', percentage: 64 },
{ date: '2034-07-11', percentage: 78 },
{ date: '2034-08-22', percentage: 50 },
{ date: '2034-09-27', percentage: 99 },
{ date: '2034-10-15', percentage: 66 },
{ date: '2034-11-04', percentage: 38 },
{ date: '2034-12-18', percentage: 11 }


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

    // Determine the correct number of weeks (52 or 53)
    const totalWeeks = this.getTotalISOWeeksInYear(this.selectedYear);

    // Get first Monday of ISO Week 1
    let currentDate = this.getFirstMondayOfISOWeek(this.selectedYear);

    // Check if January 1st belongs to previous year's last week
    const firstDay = new Date(this.selectedYear, 0, 1);
    const firstDayWeek = this.getISOWeekNumber(firstDay);
    const previousYearWeek = this.getISOWeekNumber(new Date(this.selectedYear - 1, 11, 31));

    let jan1Fix: HeatmapDay | null = null;

    // 🔥 If 01.01.YYYY belongs to Week 52/53, store it for later
    if (firstDayWeek > 50) {
      const recordedDay = this.taskCompletionData.find(d => d.date === firstDay.toISOString().split('T')[0]);
      jan1Fix = {
        date: firstDay.toISOString().split('T')[0],
        percentage: recordedDay ? recordedDay.percentage : 0,
        dayOfWeek: (firstDay.getUTCDay() + 6) % 7, // 🔥 Align Monday-Sunday
        color: recordedDay ? this.getColor(recordedDay.percentage) : '#404040'
      };
    }

    // Generate all weeks
    for (let weekNumber = 1; weekNumber <= 53; weekNumber++) {
      const week: HeatmapWeek = { weekNumber, days: [] };

      // Fill the 7 days (Monday-Sunday)
      for (let day = 0; day < 7; day++) {
        const dateString = currentDate.toISOString().split('T')[0];

        const recordedDay = this.taskCompletionData.find(d => d.date === dateString);

        week.days.push({
          date: dateString,
          percentage: recordedDay ? recordedDay.percentage : 0,
          dayOfWeek: (currentDate.getUTCDay() + 6) % 7, // 🔥 Align Monday-Sunday
          color: recordedDay ? this.getColor(recordedDay.percentage) : '#404040'
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }

      // 🔥 If January 1st was in Week 52/53, insert it into Week 1 here
      if (weekNumber === 1 && jan1Fix) {
        week.days[jan1Fix.dayOfWeek] = jan1Fix;
      }

      this.weeks.push(week);
    }

    // 🔥 If year has only 52 weeks, add invisible week 53
    if (totalWeeks === 52) {
      this.weeks.push({ weekNumber: 53, days: this.createEmptyWeek() });
    }
  }

  createEmptyWeek(): HeatmapDay[] {
    return Array.from({ length: 7 }, (_, day) => ({
      date: '',
      percentage: 0,
      dayOfWeek: day,
      color: 'transparent' // 🔥 Invisible element
    }));
  }

  getTotalISOWeeksInYear(year: number): number {
    const lastDayOfYear = new Date(year, 11, 31);
    return this.getISOWeekNumber(lastDayOfYear) === 1 ? 52 : 53;
  }

  getColor(percentage: number): string {
    if (percentage === 100) {
      return '#00A651'; // Green
    } else if (percentage >= 90) {
      return '#FFD700'; // Yellow
    } else if (percentage >= 50) {
      return '#FFA500'; // Orange
    } else if (percentage >= 0) {
      return '#FF4500'; // Red-Orange
    }
    return '#404040'; // Dark grey for missing data
  }

  getISOWeekNumber(date: Date): number {
    const tempDate = new Date(date.getTime());
    tempDate.setUTCHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getUTCDay() + 6) % 7)); // Move to Thursday
    const firstThursday = new Date(tempDate.getFullYear(), 0, 4);
    return Math.ceil(((tempDate.getTime() - firstThursday.getTime()) / 86400000 + 1) / 7);
  }

  getFirstMondayOfISOWeek(year: number): Date {
    const firstThursday = new Date(year, 0, 4);
    const dayOfWeek = firstThursday.getUTCDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    return new Date(year, 0, 4 + mondayOffset);
  }

  onDayClick(day: HeatmapDay) {
    if (day.date) {
      console.log(`Date: ${this.formatDate(day.date)} | ${day.percentage > 0 ? `Tasks Completed: ${day.percentage}%` : 'No tasks recorded'}`);
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE');
  }

  changeYear(event: Event) {
    const selectedValue = parseInt((event.target as HTMLSelectElement)?.value, 10);
    if (!isNaN(selectedValue)) {
      this.selectedYear = selectedValue;
      this.generateHeatmap();
    }
  }
}
