import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown[], ...args: unknown[]): unknown {
    return args[0] && args[0] !== '' ? value.filter((x: any) => x.user.firstName.includes(args[0]) || x.user.lastName.includes(args[0])) : value;
  }

}
