<script>
  import { fade, blur } from "svelte/transition";
  export let name;
  const GIF_DURATION = 8000;
  let status = "initial";
  setTimeout(() => {
    status = "text-in";
  }, GIF_DURATION);
  function reload() {
    location.reload();
  }
</script>

<style>
  h1,
  a {
    color: white;
  }
  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .container {
    color: white;
    background: rgb(175, 1, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .santa {
    background: rgb(175, 1, 0) url("/santa.gif") no-repeat top center;
    background-size: cover;
    height: 100vh;
    width: '100%';
  }
  .text {
    text-align: center;
  }
</style>

<div
  transition:fade={{ duration: 1000 }}
  on:introend={() => (status = 'santa-in')}
  class="container fullscreen">
  {#if status === 'santa-in'}
    <div class="santa" ></div>
  {/if}
  {#if status === 'text-in'}
    <div class="text" transition:blur={{ duration: 5000 }}>
      <p>Dein Geschenk geht an:</p>
      <h1>{name}</h1>
      <a href="#santa" on:click={reload}>Noch mal von vorne</a>
    </div>
  {/if}
</div>
