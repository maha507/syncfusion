<script>
  import Grid from "gridjs-svelte"

  const data = [
      { name: "maha", email: "maha@example.com", age: "23", mobileno: "9873366463" },
      { name: "Manasa", email: "manasa@gmail.com",  age: "21",mobileno: "9876545678"},
      {name: "giri", email: "giri@gmail.com", age:"18" , mobileno: "8766554324"},
      { name: "mahesh", email: "mahesh@example.com", age: "22", mobileno: "6873366463" },
      { name: "kavya", email: "kavya@gmail.com",  age: "21",mobileno: "9876545678"},
      {name: "ganesh", email: "ganesh@gmail.com", age:"19" , mobileno: "7766554324"},
      { name: "madhu", email: "madhu@example.com", age: "24", mobileno: "7873366463" },
      { name: "vicky", email: "vicky@gmail.com",  age: "21",mobileno: "8876545678"},
      {name: "gagan", email: "gagan@gmail.com", age:"19" , mobileno: "9766554324"}
  ]
</script>

<Grid 
sort
search 
pagination={{ enabled: true, limit: 5 }}
data={data}/>

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>
  