
<script>
	let users = []||JSON.parse(localStorage.getItem("users")); 
	let newUser = {name:"",age:"",mail:"",gender:"",nation:""};
	

  function addUser() {
    if (newUser.name !== "" && newUser.age !== "" && newUser.mail !== "" && newUser.gender !== "" && newUser.nation !=="") {
      users = [...users, newUser]; 
       localStorage.setItem("users", JSON.stringify(users));
      newUser = {name:"",age:"",mail:"",gender:"",nation:""};
      
        }
  }
</script>

<h2>Multiple User Application</h2>
<input bind:value={newUser.name} placeholder="Enter username" />
<input type="number" bind:value={newUser.age} placeholder="enter age"/>
<input bind:value={newUser.mail} placeholder="enter mail"/>
<select id="gender" bind:value={newUser.gender}>
  <option value="">-select gender-</option>
  <option value="male">male</option>
  <option value="female">female</option>
  <option value="other">other</option>
  </select>
  <select id="nation" bind:value={newUser.nation}>
<option value="">-select nation-</option>
<option value="Afghanistan">Afghanistan</option>
<option value="Angola">Angola</option>
<option value="Australia">Australia</option>
<option value="Belize">Belize</option>
<option value="Bhutan">Bhutan</option>
<option value="Canada">Canada</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="India">India</option>
<option value="Iran">Iran</option>
<option value="Colobia">Colobia</option>
<option value="Brazil">Brazil</option>
</select>
<button on:click={addUser}>Save</button>
<ul>
  {#each users as user (user)} 
  <p>----------------------------------</p>
    <li><b>name:</b>{user.name}</li>
    <li><b>age:</b>{user.age}</li>
    <li><b>mail:</b>{user.mail}</li>
    <li><b>gender:</b>{user.gender}</li>
	<li><b>nation:</b>{user.nation}</li>
  {/each}
</ul>
