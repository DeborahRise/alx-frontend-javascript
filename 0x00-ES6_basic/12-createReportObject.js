import createEmployeesObject from './11-createEmployeesObject.js';

// const employeesList = createEmployeesObject(department, employees);

export default function createReportObject(employeesList) {
    return {
        allEmployees: {
            ...employeesList,
        },
        
        getNumberOfDepartments(employeesList) {
            return Object.keys(this.allEmployees).length;
        }
    }

}