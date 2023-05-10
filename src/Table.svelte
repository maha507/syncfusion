<script>
    let data = [
      { id: 1, name: 'Janu', age: 35, mobileno:9874455332 },
      { id: 2, name: 'maha', age: 22, mobileno:8934235894},
      { id: 3, name: 'kaya', age: 42, mobileno:7676756767}
    ];
    
    
    function deleteRow(id) {
      data = data.filter(item => item.id !== id);
    }
    function createRow(newItem) {
      data = [...data, newItem];
    }
  

    function updateRow(id, newData) {
      data = data.map(item => item.id === id ? { ...item, ...newData } : item);
    }
    function create(event) {
      const formData = new FormData(event.target);
      const newItem = {
        id: data.length + 1,
        name: formData.get('name'),
        age: formData.get('age'),
        mobileno: formData.get('mobileno')
      };
      createRow(newItem);
      event.target.reset();
    }
  
    function update(event, id) {
      const formData = new FormData(event.target);
      const newData = {
    
        name: formData.get('name'),
        age: formData.get('age'),
        mobileno:formData.get('mobileno')
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
        <th>mobileno</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item}
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.mobileno}</td>
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
            <input type="number" name="mobileno" placeholder="mobileno" required>
            <button type="submit">Create</button>
          </form>
        </td>
      </tr>
    </tfoot>
  </table>
  
  