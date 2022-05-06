let studentID:number = 12345;
let studentName:string = 'Jenny Kim';
let age = 21;
let gender:string = 'female';
let subject:string = 'JavaScript';
let courseCompleted:boolean = false;

let student1 = {
  studentID: 121212,
  studentName: 'Janet Jackson',
  age: 30,
  gender: 'Femail',
  subject: 'Mongo DB',
  courseCompleted: false
}

interface Student {
  readonly studentID:number;
  studentName:string;
  age?:number;
  gender:string;
  subject:string;
  courseCompleted:boolean;
  // addComment (comment:string): string;
  addComment?: (comment:string) => string;

}

function getStudentDetails(studentID: number): Student 
{
  return {
  studentID: 123456,
  studentName: 'Mark Jacobs',
  gender: 'male',
  subject: 'Node JS',
  courseCompleted: true
  };
}

function saveStudentDetails (student: Student): void {
  student.studentID = 11222;
}

saveStudentDetails(student1)