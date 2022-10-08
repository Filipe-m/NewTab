<script>
  import Clock from './lib/Clock.svelte';
  import Temperature from './lib/Temperature.svelte';
  import Searchbar from './lib/Searchbar.svelte';

  let internet = false
  const check = () => {
    if(navigator.onLine) {
      internet = true
    }
  }
  check()
</script>

<main>
  <div class="clock">
    <Clock />
  </div>
  {#if internet}
  <div class="temp">
    <Temperature/>
  </div>
  {/if}
  <div class="search">
    <Searchbar/>
  </div>
</main>

<style>
  .temp{
    position: absolute;
    padding: 0rem;
    right: 0;
    top: 0;
    margin: 0.5rem;
    border-radius: 30px;
    color: white;
  }
  .clock{
    height: inherit;
    position: absolute;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    left: 50%;
    top: 29%;
    transform: translate(-50%,-50%);
  }

  .search{
    height: inherit;
    position: absolute;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

</style>
