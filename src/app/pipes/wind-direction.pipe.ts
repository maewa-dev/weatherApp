import { Pipe, PipeTransform } from '@angular/core';
import { windDirections } from '../utils/classification';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return windDirections[value]
  }

}
