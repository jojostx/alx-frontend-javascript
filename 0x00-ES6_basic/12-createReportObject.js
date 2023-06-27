export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,

    getNumberOfDepartments(employeesList) {
      let num = 0;
      for (const dept in employeesList) {
        if (Object.prototype.hasOwnProperty.call(employeesList, dept)) {
          num += 1;
        }
      }
      return num;
    },
  };
}
