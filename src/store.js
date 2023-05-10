import { writable } from 'svelte/store';
import Student from './Student.js';

const students = writable([]);

const addStudent = (name, age, grade) => {
  const newStudent = new Student(name, age, grade);
  students.update((allStudents) => [...allStudents, newStudent]);
};

const removeStudent = (index) => {
  students.update((allStudents) =>
    allStudents.filter((student, i) => i !== index)
  );
};

const updateStudent = (index, name, age, grade) => {
  students.update((allStudents) =>
    allStudents.map((student, i) => {
      if (i === index) {
        return new Student(name, age, grade);
      }
      return student;
    })
  );
};

export default {
  students,
  addStudent,
  removeStudent,
  updateStudent,
};
