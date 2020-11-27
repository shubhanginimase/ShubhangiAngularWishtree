import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePiope'
})
export class NamePiopePipe implements PipeTransform {

  transform(value: unknown, gender:string): String {
    if(gender=='male')
    {
    return 'Mr. '+value;
    }
    else{
      return 'Miss. '+value;
    }
  }

}
