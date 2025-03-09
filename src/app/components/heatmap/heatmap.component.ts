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
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  @Input() taskCompletionData: { date: string, percentage: number }[] = [
    { date: '2020-05-03', percentage: 74 },
    { date: '2023-01-01', percentage: 44 },
    { date: '2025-01-01', percentage: 100 },
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
    { date: '2025-12-31', percentage: 0 },
  ];

  weeks: HeatmapWeek[] = [];
  availableYears: number[] = [];
  selectedYear: number = new Date().getFullYear();

  ngOnInit() {
    this.findAvailableYears();
    this.generateHeatmap();
  }

  /**
   * Extracts all unique years from the taskCompletionData and sorts them in descending order.
   */
  findAvailableYears() {
    const years = new Set<number>();
    this.taskCompletionData.forEach(day => {
      years.add(new Date(day.date).getFullYear());
    });
    this.availableYears = Array.from(years).sort((a, b) => b - a);
  }

  /**
   * Generates the heatmap weeks.
   * The start date is determined as the Monday of the week that contains January 1 of the selected year,
   * ensuring that if January 1 belongs to the last week of the previous year, that week is included.
   * The week label for each week is computed using the ISO week number of the Monday.
   */
  generateHeatmap() {
    this.weeks = [];

    // Calculate the start date as the Monday of the week containing January 1.
    const startDate = this.getStartMondayForHeatmap(this.selectedYear);

    // Calculate the end date as the Sunday of the week containing December 31.
    const dec31 = new Date(this.selectedYear, 11, 31);
    const dec31DayOfWeek = (dec31.getUTCDay() + 6) % 7; // Adjust: Monday=0, Sunday=6.
    const endDate = new Date(dec31);
    endDate.setDate(dec31.getDate() + (6 - dec31DayOfWeek));

    let currentDate = new Date(startDate);

    // Generate weeks until the currentDate exceeds the end date.
    while (currentDate <= endDate) {
      // Use the Monday (currentDate) to compute the ISO week number.
      const weekNumber = this.getISOWeekNumber(new Date(currentDate));
      const week: HeatmapWeek = { weekNumber, days: [] };

      // Create 7 days (Monday to Sunday) for the current week.
      for (let day = 0; day < 7; day++) {
        const dateString = currentDate.toISOString().split('T')[0];

        const recordedDay = this.taskCompletionData.find(d => d.date === dateString);

        week.days.push({
          date: dateString,
          percentage: recordedDay ? recordedDay.percentage : 0,
          dayOfWeek: (currentDate.getUTCDay() + 6) % 7, // Adjust so Monday=0, Sunday=6.
          color: recordedDay ? this.getColor(recordedDay.percentage) : '#404040'
        });

        // Move to the next day.
        currentDate.setDate(currentDate.getDate() + 1);
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

  /**
   * Computes the Monday of the week that contains January 1 for the given year.
   * This allows the full week (even if part of it belongs to the previous year) to be shown.
   *
   * @param year - The selected year.
   * @returns The Date for the Monday starting the week that includes January 1.
   */
  getStartMondayForHeatmap(year: number): Date {
    const jan1 = new Date(year, 0, 1);
    // Adjust so that Monday is 0 and Sunday is 6.
    const dayOfWeek = (jan1.getUTCDay() + 6) % 7;
    const startMonday = new Date(jan1);
    startMonday.setDate(jan1.getDate() - dayOfWeek);
    return startMonday;
  }

  /**
   * Converts a task completion percentage to a corresponding color.
   *
   * @param percentage - The task completion percentage.
   * @returns A hex color string representing the completion level.
   */
  getColor(percentage: number): string {
    if (percentage === 100) {
      return '#00A651'; // Green for 100%
    } else if (percentage >= 90) {
      return '#FFD700'; // Yellow for 90%+
    } else if (percentage >= 50) {
      return '#FFA500'; // Orange for 50%+
    } else if (percentage >= 0) {
      return '#FF4500'; // Red-Orange for 0-50%
    }
    return '#404040'; // Dark grey for missing/invalid data
  }

  /**
   * Computes the ISO week number for a given date.
   * If the computed week number is less than 1 (which may happen for days in early January that belong to week 1),
   * it returns 1.
   *
   * @param date - The date for which the ISO week number is computed.
   * @returns The ISO week number.
   */
  getISOWeekNumber(date: Date): number {
    const target = new Date(date.getTime());
    target.setUTCHours(0, 0, 0, 0);
    // Calculate day number with Monday as 0.
    const dayNr = (target.getUTCDay() + 6) % 7;
    // Move to the Thursday in the current week.
    target.setDate(target.getDate() - dayNr + 3);
    const firstThursday = new Date(target.getFullYear(), 0, 4);
    const weekNumber = 1 + Math.floor((target.getTime() - firstThursday.getTime()) / (7 * 86400000));
    // If the week number is less than 1, correct it to 1.
    return weekNumber < 1 ? 1 : weekNumber;
  }

  /**
   * Handles the click event on a day.
   * Logs the formatted date and task completion percentage.
   *
   * @param day - The clicked heatmap day.
   */
  onDayClick(day: HeatmapDay) {
    if (day.date) {
      console.log(`Date: ${this.formatDate(day.date)} | ${day.percentage > 0 ? `Tasks Completed: ${day.percentage}%` : 'No tasks recorded'}`);
    }
  }

  /**
   * Formats a date string into a human-readable format using the German locale.
   *
   * @param dateString - The ISO date string.
   * @returns The formatted date.
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE');
  }

  /**
   * Handles the event when a new year is selected.
   * Updates the selected year and regenerates the heatmap.
   *
   * @param event - The change event from the year selection input.
   */
  changeYear(event: Event) {
    const selectedValue = parseInt((event.target as HTMLSelectElement)?.value, 10);
    if (!isNaN(selectedValue)) {
      this.selectedYear = selectedValue;
      this.generateHeatmap();
    }
  }
}
