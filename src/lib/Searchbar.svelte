<script>

</script>
<div>
  <img src="/src/assets/Search.svg" alt="">
  <form action="https://google.com/search" autocomplete="off"  type="GET">
    <input type="hidden" name=" " />
    <input type="text" name="q" placeholder="Search..." />
  </form>
</div>

<style>
  div{
    margin: 0;
    padding: 0;
    background-color: white;
    padding: 0.7rem;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 35rem;
    border-radius: 50px;
    border-style: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    font-weight:lighter;
  }
  input::placeholder{
    text-align: left;
    margin-left: 1rem;
  }
  input:focus,input:visited,input:active{
  outline: none;
}
</style>