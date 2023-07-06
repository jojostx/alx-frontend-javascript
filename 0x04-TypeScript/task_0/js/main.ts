interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: "Hayes",
  lastName: "Manny",
  age: 18,
  location: 'Chicago',
};

const student_2: Student = {
  firstName: "Sophia",
  lastName: "Garcia",
  age: 22,
  location: 'Manila',
};

const studentsList = [student_1, student_2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "pink";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);