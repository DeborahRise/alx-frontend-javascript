import createReportObject from './12-createReportObject';
const report = createReportObject();

export default function createIteratorObject(report) {
    const newlist = [];
    for (const department of Object.values(report.allEmployees)) {
        for (const employees of department) {
            newlist.push(employees)
        }
        
    }
    return newlist;
}