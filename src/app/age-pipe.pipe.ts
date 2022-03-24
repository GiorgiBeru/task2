import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe',
})
export class AgePipePipe implements PipeTransform {
  transform(value: string): unknown {
    const timestamp = Date.parse(value);

    let dateObject: any = new Date(timestamp);

    let now = Date.now();

    const diffTime = Math.abs(now - dateObject);

    const age = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));

    return age;
  }
}
