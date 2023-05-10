<script>
    let data = [
      { id: 1, name: 'John', age: 35 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Bob', age: 42 }
    ];
    
    // Define a function to delete a row from the table
    function deleteRow(id) {
      data = data.filter(item => item.id !== id);
    }
    function createRow(newItem) {
      data = [...data, newItem];
    }
  
    // Define a function to update an existing row in the table
    function updateRow(id, newData) {
      data = data.map(item => item.id === id ? { ...item, ...newData } : item);
    }
    function create(event) {
      const formData = new FormData(event.target);
      const newItem = {
        id: data.length + 1,
        name: formData.get('name'),
        age: formData.get('age')
      };
      createRow(newItem);
      event.target.reset();
    }
  
    function update(event, id) {
      const formData = new FormData(event.target);
      const newData = {
        name: formData.get('name'),
        age: formData.get('age')
      };
      updateRow(id, newData);
    }
  </script>
  
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item}
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td><button on:click={() => deleteRow(item.id)}>Delete</button></td>
        </tr>
      {/each}
    </tbody>

    <tfoot>
      <tr>
        <td colspan="4">
          <form on:submit|preventDefault={create}>
            <input name="name" placeholder="Name" required>
            <input type="number" name="age" placeholder="Age" required>
            <button type="submit">Create</button>
          </form>
        </td>
      </tr>
    </tfoot>
  </table>
  
  