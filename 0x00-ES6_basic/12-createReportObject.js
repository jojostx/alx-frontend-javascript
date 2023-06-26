export default function createReportObject(employeesList) {
    let c = { Software: [ 'Bob', 'Sylvie' ] };

    return {
	allEmployees: employeesList,

        getNumberOfDepartments(employeesList){
	    let num = 0;
	    for (const dept in employeesList) {
		num++;
	    }
	    return num;
	}
    };
}
