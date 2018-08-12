import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      const today: Date = new Date(); // current date and timeCount
      const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const dateDifference = Math.abs(value - todayWithNoTime);
      const secondsInADay = 86400002;

      const dateDifferenceSeconds = dateDifference * 0.001;
      const dateCounter = dateDifferenceSeconds / secondsInADay;

      if (dateCounter >= 1) {
        return dateCounter;
      } else {
        return 0;
      }
    }

  }
