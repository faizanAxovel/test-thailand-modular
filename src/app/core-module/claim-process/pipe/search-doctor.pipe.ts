import { Pipe, PipeTransform } from '@angular/core';
import { Hospital } from 'src/app/shared/model/model';

@Pipe({
  name: 'searchDoctor'
})
export class SearchDoctorPipe implements PipeTransform {

  transform(hospitals: Hospital[], searchStr: string): any {
    if (searchStr) {
      const filteredHospitals = hospitals.filter((el) => el.name.toUpperCase().indexOf(searchStr.toUpperCase()) !== -1);
      if (filteredHospitals.length === 0) {
        filteredHospitals.push({
          id: 929,
          name: searchStr
        });
      }
      return filteredHospitals;
    } else {
      return hospitals;
    }
  }

}
