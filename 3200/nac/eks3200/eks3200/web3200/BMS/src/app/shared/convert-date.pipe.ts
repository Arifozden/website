import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {
  transform(value: string | number | Date, locale: string = 'en-US'): string {
    if (!value) {
      return '';
    }

    const datePipe: DatePipe = new DatePipe(locale);
    return datePipe.transform(value, 'dd-MM-yyyy') || '';
  }
}

