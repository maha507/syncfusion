
<script>
  import { onMount } from 'svelte';
  import TaskList from './TaskList.svelte';

  let tasks = [];

  function handleAddTask() {
    const text = prompt('Enter task:');
    if (text) {
      tasks = [...tasks, { id: Date.now(), text }];
    }
  }

  function handleEditTask(task) {
    const text = prompt('Enter new task:', task.text);
    if (text) {
      tasks = tasks.map(t => t.id === task.id ? { ...t, text } : t);
    }
  }

  function handleDeleteTask(task) {
    tasks = tasks.filter(t => t.id !== task.id);
  }

  onMount(() => {
    tasks = [
      { id: 1, text: 'Complete entire introduction in 2 days' },
      { id: 2, text: 'Complete basic and impotant topics' },
      { id: 3, text: 'develop a sipmle application by your own' },
    ];
  });
</script>

<div>
  <button on:click={handleAddTask}>Add Task</button>
  <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
</div>
