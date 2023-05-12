<script>
  import Grid from "gridjs-svelte"


  const data = [
    {
      State: 'California',
      Capital: 'Sacramento',
      Language: 'English',
      Population:''
    },
    {
      State: 'Texas',
      Capital: 'Austin',
      Language: 'English',
      Population: ''
    },
    {
      State: 'New York',
      Capital: 'Albany',
      Language: 'English',
      Population: ''
    },
    {
      State: 'Hawaii',
      Capital: 'Honolulu',
      Language: 'English, Hawaiian',
      Population: ''
    },
    {
      State: 'Louisiana',
      Capital: 'Baton Rouge',
      Language: 'English',
      Population: ''
    }
  ]
</script>

<Grid data={data}
sort
search
pagination={{ enabled: true, limit: 3 }}
 
/>

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>