<script>
    export let produit;

    import BtnAcheter from './btn_acheter.svelte';
</script>

<div class="container">
    <div class="row">      
       <h1 class="text-center">{produit.title}</h1> 
    </div>

    <div class="row justify-content-center">
        {#if produit.images.length> 0}
            {#each produit.images as image}
                <img class="w-25" src="{image}" alt="{image}">
            {/each}
        {:else}
        <p>Aucune images disponible</p>
      {/if}
    </div>

    <div class="row justify-content-center mt-5">
        <p class="text-center">{produit.description}</p>
    </div>

    <div class="row justify-content-center mt-2">
        <h2 class="text-center">{produit.price} €</h2>
    </div>

    <div class="container">
        <div class="d-flex justify-content-center">
            <BtnAcheter id_produit={produit.id}></BtnAcheter>
        </div>
    </div>


</div>