<script>
  import Clock from './lib/Clock.svelte';
  import Temperature from './lib/Temperature.svelte';
  import Searchbar from './lib/Searchbar.svelte';
  import { fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let openSide = false

  // This is the list of sites that appears in the side-bar, the diffenrence from img to link is only the https://
  let sites = [
    {name : 'Youtube', img:'www.youtube.com', link: 'https://www.youtube.com'},
    {name : 'Whatsapp', img: 'web.whatsapp.com', link: 'https://web.whatsapp.com'},
    {name: 'Github', img:'github.com/Filipe-m?tab=repositories', link: 'https://github.com/Filipe-m?tab=repositories'},
    {name: 'Twitter', img: 'twitter.com', link: 'https://twitter.com/home'},
    {name: 'Instagram' , img: 'instagram.com', link: 'https://www.instagram.com'},
    {name: 'Translate', img: 'translate.google.com', link:'https://translate.google.com'},
    {name: 'Twitch', img: 'www.twitch.tv', link: 'https://www.twitch.tv'}
  ]

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
  {#if openSide}
  <div class="sidebar" transition:slide="{{delay: 50, duration: 500, easing: quintOut }}">
    <div class="bar">
      <div class="close-btn">
        <button class="btn" on:click={()=> openSide = false}>✕</button>
      </div>
      <div class="links">
        <div class="apps">
          {#each sites as site }
          <a class="app" href={site.link}><img class="img" src='https://icon.horse/icon/{site.img}' alt={site.name}></a>
          {/each}
        </div>
      </div>
    </div>
  </div>
  {/if}
  {#if openSide == false }
  <button transition:fade="{{delay: 0, duration: 200}}" class="sidebar-btn" on:click={() => openSide = true}>☰</button>
  {/if}
</main>

<style>
  .sidebar-btn{
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    border-style: none;
    color: white;
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 10px;
  }
  .sidebar-btn:hover{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.473);
  }
  
  .sidebar{
    position: fixed;
    left: 0.3rem;
    display: flex;
    align-items: center;
    height: 100%;
    z-index: 1;
  }

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
