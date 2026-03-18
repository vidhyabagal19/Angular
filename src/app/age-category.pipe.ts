import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCategory'
})
export class AgeCategoryPipe implements PipeTransform {

  transform(age: number): any {
    if(age<25){
      return `${age} Junior`
    }
    else{
      return `${age} Senior`
    }

  }

}
