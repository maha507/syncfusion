<script>
    import Task from './Task.svelte';
  
    export let tasks;
    export let onEdit;
    export let onDelete;
  </script>
  
  <div>
    {#each tasks as task}
      <Task {task} onEdit={onEdit} onDelete={onDelete} />
    {/each}
  </div>
  