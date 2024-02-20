<script>
    import Header from '../Header.svelte';
    import { onMount } from "svelte";

    import ImageList, {
    Item,
    ImageAspectContainer,
    Image,
    Supporting,
    Label,
  } from '@smui/image-list';


  import CircularProgress from '@smui/circular-progress';

  let data = [];

    async function loadData() {
        try {
        // Effectuer une requête HTTP GET à l'API

        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
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

    

</script>

<style lang="scss">
    @import './_FourByFive.scss';
</style>

<Header/>
<div class="container">
    <div class="row">
        <h1 class="text-center">Listes de toutes les categories</h1>
    </div>


    {#await loadData()}
    <div class="row justify-content-center">
        <CircularProgress style="height: 32px; width: 32px;" indeterminate />
    </div>
    {:then} 
    <div class="container">
        
        {#if data.length>0}
            <ImageList class="my-image-list-4x5" withTextProtection>
                {#each data as categorie}
                    <Item>
                        <ImageAspectContainer>
                        <Image
                            src={categorie.image}
                            alt={categorie.image}
                        />
                        </ImageAspectContainer>
                        <Supporting>
                        <Label>{categorie.name}</Label>
                        </Supporting>
                    </Item>
                {/each}
            </ImageList>
        {:else}
            <p>Impossible de charger les mannequins</p>
        {/if}

      
    </div>

    {/await}

</div>