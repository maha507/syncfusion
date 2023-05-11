<script>
    export let task;
    export let onEdit;
    export let onDelete;
  
    function handleEdit() {
      onEdit(task);
    }
  
    function handleDelete() {
      onDelete(task);
    }
  </script>
  
  <div>
    <span>{task.text}</span>
    <button on:click={handleEdit}>Edit</button>
    <button on:click={handleDelete}>Delete</button>
  </div>
  