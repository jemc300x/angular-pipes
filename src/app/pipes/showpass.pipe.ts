import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpass'
})
export class ShowpassPipe implements PipeTransform {

  transform(value: string, show: boolean = true): string {
    
    if ( show ) {
      return value;
    } else {
      const valueLength = value.length;
      let newValue = '';
      for (let index = 0; index < valueLength; index++) {
        newValue += '*';
      }
      return newValue;
    }
  }

}
