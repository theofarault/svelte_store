<script>
    import Header from "../Header.svelte";
    import Button, { Label } from '@smui/button';

    import { compteur } from '../compteur.js';

    let dictionnaire = "";

    compteur.subscribe(dictionary => {
        dictionnaire = dictionary;
    });

    let count_value;

    compteur.subscribe(dictionary => {
        var count = Object.keys(dictionary).length;
        count_value = count;
    });

    let somme_panier = 0;
    
    function majSomme(event) {
        
        somme_panier += event.detail;
    }


    import DetailProduitPanier from "../detail_produit_panier.svelte";
</script>

<Header></Header>
<div class="container">
    <div class="row justify-content-center">
        <h1 class="text-center">Panier</h1>
    </div>

    <div class="row justify-content-center">
        {#if count_value > 0 }
            {#each Object.entries(dictionnaire) as [productId, quantity]}
                <DetailProduitPanier produit_id={productId} quantite_produit={quantity} on:nouvelleSomme={majSomme}></DetailProduitPanier>
            {/each}

            <Button variant="raised">
                <Label>Passer commande ({somme_panier}€)</Label>
            </Button>
        {:else}
            <p>Il n'y a pas d'article dans le panier</p>
        {/if}

    </div>
</div>