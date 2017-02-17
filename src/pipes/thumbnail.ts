import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {


  transform(value: any, args?: any): any {

    if(args === 'small') {
      value = value.substr(0).slice(0, -4);
      return value + '-tn160.png';
    } else if(args === 'medium') {
      value = value.substr(0).slice(0, -4);
      return value + '-tn320.png';
    } else if(args === 'large') {
      value = value.substr(0).slice(0, -4);
      return value + '-tn640.png';
    }

    return value;

  }

}
