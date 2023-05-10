<script>
    import { onMount } from 'svelte';
    import { students, addStudent, removeStudent, updateStudent } from './store.js';
  
    let name = '';
    let age = '';
    let grade = '';
    let editingIndex = null;
  
    const handleSubmit = () => {
      if (editingIndex !== null) {
        updateStudent(editingIndex, name, age, grade);
        editingIndex = null;
      } else {
        addStudent(name, age, grade);
      }
      name = '';
      age = '';
      grade = '';
    };
  
    const handleEdit = (index) => {
      const student = students[index];
      name = student.name;
      age = student.age;
      grade = student.grade;
      editingIndex = index;
    };
  
    const handleDelete = (index) => {
      removeStudent(index);
    };
  </script>
  
  <h1>Student Table</h1>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Name:
      <input type="text" bind:value={name} />
    </label>
  
    <label>
      Age:
      <input type="number" bind:value={age} />
    </label>
  
    <label>
      Grade:
      <input type="number" bind:value={grade} />
    </label>
  
    <button type="submit
  