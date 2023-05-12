<script>
  let applicants = [
    { names: ['task 1', 'task 2', 'task 3'] },
    { names: ['task 4', 'task 5'] },
    { names: ['Task 6', 'Task 7', 'Task 8'] }
  ];

  let hoveringOverApplicant = null;

  function dragStart(event, applicantIndex, nameIndex) {
    const data = { applicantIndex, nameIndex };
    event.dataTransfer.setData('text/plain', JSON.stringify(data));
  }

  function drop(event, applicantIndex, nameIndex = null) {
event.preventDefault();
const json = event.dataTransfer.getData('text/plain');
const data = JSON.parse(json);

if (nameIndex !== null) {
  // Reordering names within the same applicant
  const [name] = applicants[data.applicantIndex].names.splice(data.nameIndex, 1);
  applicants[applicantIndex].names.splice(nameIndex, 0, name);
} else {
  // Moving name to a different applicant
  const [name] = applicants[data.applicantIndex].names.splice(data.nameIndex, 1);
  applicants[applicantIndex].names.push(name);
}

applicants = [...applicants]; // Make a copy to trigger reactivity
hoveringOverApplicant = null;
}

  function deleteName(applicantIndex, nameIndex) {
    applicants[applicantIndex].names.splice(nameIndex, 1);
    applicants = [...applicants]; // Make a copy to trigger reactivity
  }

  function editName(applicantIndex, nameIndex, newName) {
    applicants[applicantIndex].names[nameIndex] = newName;
    applicants = [...applicants]; // Make a copy to trigger reactivity
  }

  function addName(applicantIndex) {
    const newName = prompt('Enter a new name:');
    if (newName) {
      applicants[applicantIndex].names.push(newName);
      applicants = [...applicants]; // Make a copy to trigger reactivity
    }
  }
</script>

<div class="applicants">
  {#each applicants as applicant, i}
    <div
      class="applicant"
      on:dragover={() => hoveringOverApplicant = i}
      on:drop={() => drop(Event, i)}
      on:dragleave={() => hoveringOverApplicant = null}
      style="background-color: {i === hoveringOverApplicant ? 'lightgray' : 'white'};"
    >
      <h2>these Tasks are in  {i + 1} <button on:click={() => addName(i)}>Add Name</button></h2>
      <ul>
        {#each applicant.names as name, j}
          <li
            class="name"
            draggable="true"
            on:dragstart={() => dragStart(Event, i, j)}
          >
            <div style="display: flex; align-items: center;">
              <span>{name}</span>
              <div style="margin-left: 10px;">
                <button on:click={() => deleteName(i, j)}>Delete</button>
                <button on:click={() => editName(i, j, prompt('Enter a new name:'))}>Edit</button>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
  .applicants {
    display: flex;
    justify-content: space-between;
  }

  .applicant {
    width: 400px;
    padding: 20px;
    border: 1px solid black;
    margin: 10px;
  }

  .name {
    cursor: move;
    margin: 5px;
    padding: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
  }
</style>

