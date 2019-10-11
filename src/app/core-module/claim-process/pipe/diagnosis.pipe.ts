import { Pipe, PipeTransform } from '@angular/core';
import { Diagnosis } from 'src/app/shared/model/model';

@Pipe({
  name: 'diagnosis'
})
export class DiagnosisPipe implements PipeTransform {

  transform(diagnosis: Diagnosis[], searchStr: string): any {
    if (searchStr) {
      const filteredString = diagnosis.filter((el) => el.description.toUpperCase().indexOf(searchStr.toUpperCase()) !== -1);
      if (filteredString.length === 0) {
        filteredString.push({
          id: 900,
          description: searchStr
        });
      }
      return filteredString;
    } else {
      return diagnosis;
    }
  }

}
