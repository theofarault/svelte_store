<script>
    import { onMount } from "svelte";
    import Header from "../Header.svelte";

    let data = [];

    async function loadData() {
        try {
        // Effectuer une requête HTTP GET à l'API

        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        //console.log(response);
        // Vérifier si la requête a réussi (statut HTTP 200)
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        
        // Convertir la réponse en JSON
        data = await response.json();
        //console.log(data)
        return data
        } catch (error) {
        console.error('Erreur:', error);
        }
    }

    onMount(loadData);


  import CircularProgress from '@smui/circular-progress';

  import CardPersonne from "../card_personne.svelte";

</script>

<Header></Header>

<div class="container">
    <div class="row justify-content-center">
        <h1 class="text-center">Liste des mannequins</h1>
    </div>

    {#await loadData()}
    <div class="row justify-content-center">
        <CircularProgress style="height: 32px; width: 32px;" indeterminate />
    </div>
    {:then} 
    <div class="container">
        <div class="d-flex flex-wrap justify-content-center">
        {#if data.length>0}
            {#each data as person}
                <CardPersonne person={person}></CardPersonne>
            {/each}
        {:else}
            <p>Impossible de charger les mannequins</p>
        {/if}

        </div>
    </div>

    {/await}


</div>