<script>
    import DetailProduit from "../../detail_produit.svelte";
    import Header from "../../Header.svelte";


     // Importer la fonction `onMount` pour exécuter du code au montage du composant
     import { onMount } from 'svelte';

    // export const load = async (serverLoadEvent) =>{
    //   const {fetch, params} = serverLoadEvent;
    //   const {produitID} = params;
    //     console.log("iciiic".produitID);
    //     return produitID;
    // }

      /** @type {import('./$types').PageData} */
      export let data;


  
  // Déclarer une variable pour stocker les données récupérées de l'API
  let data_api = [];

  // Fonction pour charger les données depuis l'API
  async function loadData() {
    try {

      // Effectuer une requête HTTP GET à l'API
      const response = await fetch('https://api.escuelajs.co/api/v1/products/'+ data.id);
      
      // Vérifier si la requête a réussi (statut HTTP 200)
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      
      // Convertir la réponse en JSON
      data_api = await response.json();
      console.log(data_api)
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  // Exécuter la fonction de chargement des données au montage du composant
  onMount(loadData);


</script>

<Header></Header>
<div>

  {#if data_api != ""}
    <DetailProduit produit={data_api}></DetailProduit>
  {:else}
    <p>Aucune donnée disponible</p>
  {/if}
  
    
</div>
  