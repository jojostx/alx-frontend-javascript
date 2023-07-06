interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (a: string, b: string, c: string): string;
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentClassConstructor = class StudentClass implements StudentClassInterface {
  firstname: string;
  lastname: string;

  constructor(firstName: string, lastName: string) {
    this.firstname = firstName;
    this.lastname = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstname;
  }
};

export { printTeacher, StudentClass };
