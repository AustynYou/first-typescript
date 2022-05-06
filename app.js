var studentID = 12345;
var studentName = 'Jenny Kim';
var age = 21;
var gender = 'female';
var subject = 'JavaScript';
var courseCompleted = false;
var student1 = {
    studentID: 121212,
    studentName: 'Janet Jackson',
    age: 30,
    gender: 'Femail',
    subject: 'Mongo DB',
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: 'Mark Jacobs',
        gender: 'male',
        subject: 'Node JS',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
    student.studentID = 11222;
}
saveStudentDetails(student1);
