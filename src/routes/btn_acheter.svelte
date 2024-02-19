<script>
    export let id_produit;

    import { compteur } from './compteur.js';

    function increment() {
		compteur.update((n) => n + 1);
	}
</script>


<button class="btn btn-danger" value="{id_produit}" on:click={increment} >Acheter</button>