'use strict';

class Person {

  name: string;
  age: number;
  gender: string;

  constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female') {
    this.name = n;
    this.age = a;
    this.gender = g;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }
}


class Student extends Person {

  previousOrganization: string;
  skippedDays: number;

  constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', p0: string = 'The School of Life', sD: number = 0) {
    super(n, a, g);

    this.previousOrganization = p0;
    this.skippedDays = sD;
  }

  getGoal(): void {
    console.log('Be a junior software developer.');
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {

  level: string;

  constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', l: string = 'intermediate') {
    super(n, a, g);

    this.level = l;
  }

  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}

class Sponsor extends Person {

  company: string;
  hiredStudents: number;

  constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', c: string = 'Google', hc: number = 0) {
    super(n, a, g)

    this.company = c;
    this.hiredStudents = hc;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');

  }

  hire() {
    this.hiredStudents++;
  }
}

class Cohort {

  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string, students: Student[] = [], mentors: Mentor[] = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();