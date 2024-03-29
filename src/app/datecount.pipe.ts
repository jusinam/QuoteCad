import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.0001;
    var dateCounter = Math.floor(dateDifferenceSeconds / secondsInDay);

    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
