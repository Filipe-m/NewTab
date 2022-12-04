<script>

</script>
<div>
  <form action="https://google.com/search" autocomplete="on"  type="GET">
    <input type="hidden" name=" " />
    <input type="text" autofocus name="q" placeholder="Search..." />
    <button type="submit" ><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="SearchIcon"></button>
  </form>
</div>

<style>

  button{
    width: fit-content;
    height: fit-content;
    border: none;
    background-color: transparent;
  }
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

form{
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

img{
  width: 2rem;
  height: 2rem;
  padding-right: 1rem;
}
</style>