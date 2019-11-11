<script>
  import { pair } from "./db";
  import SantaAnimation from "./SantaAnimation.svelte";

  const [from, to] = pair();

  // Reveal giftee on click
  let shown = false;
  function show(event) {
    event.preventDefault();
    shown = true;
  }
</script>

<style>
  h1 {
    color: rgb(175, 1, 0);
  }
</style>

<h1>Liebe/r {from}</h1>
<p>
  Du wurdest auserwählt um am wunderbaren Brauch des Wichtelns teilzunehmen. Um
  die Portemonnaies etwas zu schonen, sollte dein Geschenk nicht mehr als
  <b>50.- CHF</b>
  kosten.
</p>
<p>
  Falls du magst, kannst du deine Wünsche in der
  <a target="_blank" href="http://djini.ch">Djini</a>
  App hinterlegen. So können die Schenkenden sehen was dir Freude bereitet und
  du {from}, findest eine passende Geschenkidee für dein Los.
</p>
<p>
  {from}, dein Geschenk geht an:
  <a href="#santa" on:click={show}>Jetzt enthüllen</a>
  {#if shown}
    <SantaAnimation name={to} />
  {/if}
</p>
<p>Herzliche Grüsse</p>
<p>Der Wichtelmaster</p>
