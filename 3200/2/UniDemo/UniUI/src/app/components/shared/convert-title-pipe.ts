import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
//First letter in the words becomes Uppercase automatically
    return value.replace(/\b\w/g, (match) => match.toUpperCase());
  }
}
