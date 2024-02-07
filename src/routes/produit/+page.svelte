<script>
    import CardShop from "../card_shop.svelte";

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
</script>

<div>
    
</div>
  