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
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Header from './Header.svelte';

</script>

<Header/>
<div class="container">
  <div class="row">
    <h1 class="text-center">Bienvenue sur votre boutique favorite</h1>
  </div>
</div>

  <!-- Afficher les données -->
  {#if data.length > 0}
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
  

