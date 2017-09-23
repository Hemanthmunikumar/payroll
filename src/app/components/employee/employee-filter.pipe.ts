import { PipeTransform, Pipe } from '@angular/core';

import { IEmployee } from '../../models/employee';

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

    transform(value: IEmployee[], filterBy: string): IEmployee[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((employee: IEmployee) =>
            employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
