<script>
  let pendingItems = [
    { id: 1, name: 'Task 1', description: 'complete inroduction part'},
    { id: 2, name: 'Task 2', description: 'have to learn Basic topics in the tool',  },
  ];
  let completedItems=[];
  function addItem() {
    const name = prompt('Enter the name of the task');
    const description = prompt('Enter the description of the task');
    const id = pendingItems.length + 1;
    pendingItems = [...pendingItems, { id, name, description, status: 'pending' }];
  }

  function editItem(item) {
    const name = prompt('Enter the new name of the task', item.name);
    const description = prompt('Enter the new description of the task', item.description);
    pendingItems = pendingItems.map(i => i.id === item.id ? { ...i, name, description } : i);
  }

  function deleteItem(item) {
    pendingItems = pendingItems.filter(i => i.id !== item.id);
    completedItems = completedItems.filter(i => i.id !== item.id);
  }

  function handleDrop(event) {
    const itemId = event.dataTransfer.getData('itemId');
    const item = pendingItems.find(i => i.id === Number(itemId));
    pendingItems = pendingItems.filter(i => i.id !== Number(itemId));
    completedItems = [...completedItems, { ...item, status: 'completed' }];
  }
</script>

<div class="container">
  <div class="pending-items" on:drop={handleDrop}>
    
    {#each pendingItems as item}
      <div class="item" draggable="true" on:dragstart={() => event.dataTransfer.setData('itemId', item.id)}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <button on:click={() => editItem(item)}>Edit</button>
        <button on:click={() => deleteItem(item)}>Delete</button>
      </div>
    {/each}
  </div>
  <div class="completed-items">
    
    {#each completedItems as item}
      <div class="item">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    {/each}
  </div>
  <h1></h1>
  <button on:click={addItem}>Add task</button>
</div>
