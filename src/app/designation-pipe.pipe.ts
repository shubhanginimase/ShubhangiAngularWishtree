import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'designationPipe'
})
export class DesignationPipePipe implements PipeTransform {

  transform(value: any, yrofexp:Number): String {
    if(yrofexp>5)
    {
      return 'Sr. '+value;
    }
    else{
      return 'Jr. '+value;
    }
  }

}
