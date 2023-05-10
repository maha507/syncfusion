<script>
    let rows = [
      { id: 1, name: "maha", email: "maha@example.com" },
      { id: 2, name: "kavya", email: "kavya@example.com" }
    ];
    
    let newId = rows.length + 1;
    let newRow = { id: newId, name: "", email: "" };
    let editingRow = null;
    
    function removeRow(id) {
      rows = rows.filter(row => row.id !== id);
    }
    
    function addRow() {
      rows = [...rows, newRow];
      editingRow = newRow;
      newId++;
      newRow = { id: newId, name: "", email: "" };
    }
    
    function saveRow(row) {
      let index = rows.findIndex(r => r.id === row.id);
      if (index !== -1) {
        rows[index] = row;
        editingRow = null;
      }
    }
  </script>
  
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        {#if editingRow === row}
          <tr>
            <td>{row.id}</td>
            <td><input bind:value={row.name} /></td>
            <td><input bind:value={row.email} /></td>
            <td>
              <button on:click={() => saveRow(row)}>Save</button>
              <button on:click={() => editingRow = null}>Cancel</button>
            </td>
          </tr>
        {:else}
          <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>
              <button on:click={() => editingRow = row}>Edit</button>
              <button on:click={() => removeRow(row.id)}>Delete</button>
            </td>
          </tr>
        {/if}
      {/each}
      <tr>
        <td>{newId}</td>
        <td><input bind:value={newRow.name} /></td>
        <td><input bind:value={newRow.email} /></td>
        <td><button on:click={addRow}>Add</button></td>
      </tr>
    </tbody>
  </table>
  