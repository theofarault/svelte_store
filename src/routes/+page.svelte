<script>
    import Button from '@smui/button'

    // Importer la fonction `onMount` pour exécuter du code au montage du composant
    import { onMount } from 'svelte';
  
  // Déclarer une variable pour stocker les données récupérées de l'API
  let data = [];

  // Fonction pour charger les données depuis l'API
  async function loadData() {
    try {
      // Effectuer une requête HTTP GET à l'API
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      
      // Vérifier si la requête a réussi (statut HTTP 200)
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      
      // Convertir la réponse en JSON
      data = await response.json();
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  // Exécuter la fonction de chargement des données au montage du composant
  onMount(loadData);


  import CardShop from './card_shop.svelte';
  import Header from './Header.svelte';
  import CircularProgress from '@smui/circular-progress';

  let searchResults = [];

  function handleSearch(event) {
    // Exécuter la logique de recherche et mettre à jour searchResults
    // par exemple, vous pouvez utiliser fetch() pour récupérer les résultats
    // à partir d'une API
    fetch("https://api.escuelajs.co/api/v1/products/?title=" + event.detail)
      .then(response => response.json())
      .then(data => {
        searchResults = data;
      });
  }

</script>

<Header on:search={handleSearch}/>
<div class="container">
  <div class="row">
    <h1 class="text-center">Bienvenue sur votre boutique favorite</h1>
  </div>
</div>

  {#await loadData()}
    <div class="row justify-content-center">
        <CircularProgress style="height: 32px; width: 32px;" indeterminate />
    </div>
  {:then}
    <!-- Afficher les données -->
    {#if searchResults.length > 0}
      <div class="container">
        <div class="d-flex flex-wrap justify-content-center">
          {#each searchResults as product}
            <CardShop produit={product}></CardShop>
          {/each}
        </div>
    </div> 

    {:else if data.length > 0}
          <div class="container">
              <div class="d-flex flex-wrap justify-content-center">
                {#each data as product}
                  <CardShop produit={product}></CardShop>
                {/each}
              </div>
          </div>     
    
    {:else}
      <p>Aucune donnée disponible</p>
    {/if}
{/await}
  

