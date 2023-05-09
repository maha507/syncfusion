<script>
  import { fade } from 'svelte/transition';

  let todos = [];

  function addTodo() {
    const input = document.querySelector('#todo-input');
    const todo = input.value.trim();
    if (todo !== '') {
      todos = [...todos, { id: Date.now(), text: todo }];
      input.value = '';
    }
  }

  function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
  }
</script>

<main>
  <h1>TODO List</h1>
  <h2>enter locations in india</h2>
  <div class="input-group">
    <input type="text" id="todo-input" placeholder="Enter a new TODO" />
    <button on:click={addTodo}>Add</button>
  </div>
  <ul>
    {#each todos as todo (todo.id)}
      <li transition:fade>
        <span>{todo.text}</span>
        <button on:click={() => deleteTodo(todo.id)}>delete</button>
        
      </li>
    {/each}
  
</main>

<style>
  .input-group {
    display: flex;
    margin-bottom: 1rem;
  }

  input[type="text"] {
    flex: 1;
    margin-right: 1rem;
  }

  button {
    padding: 0.5rem;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  button {
    margin-left: auto;
  }
</style>
