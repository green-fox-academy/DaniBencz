/* Create Student and Teacher classes
Student
  learn()
  question(teacher) -> calls the teachers answer method
Teacher
  teach(student) -> calls the students learn method
  answer() */

//for this one, credit goes to Eszkis
class Student {

  learn() {
    console.log('Student learned');
   }

  question(teacher) {
    console.log('Student asked question');
    teacher.answer();
  }
}

class Teacher {

  answer() {
    console.log('Teacher answered');
   }

  teach(student) {
    console.log('Teacher gave lesson');
    student.learn();
  }
}

const teacher1 = new Teacher;
const student1 = new Student;

student1.question(teacher1);
teacher1.teach(student1);