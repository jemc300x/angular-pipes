import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpass'
})
export class ShowpassPipe implements PipeTransform {

  transform(value: string, show: boolean = true): string {
    return (show) ? value : '*'.repeat(value.length);
  }

}
