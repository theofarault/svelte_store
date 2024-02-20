<script>
    export let id_produit;

    import { compteur } from './compteur.js';

    function addToDictionary() {
      compteur.update(dictionary => {
      // Si la clé existe déjà dans le dictionnaire, ajoute la nouvelle quantité à l'ancienne
      if (id_produit in dictionary) {
        dictionary[id_produit] += 1;
      } else {
        // Sinon, initialise la quantité avec la nouvelle valeur
        dictionary[id_produit] = 1;
      }
      return dictionary;
    });
}
</script>


<button class="btn btn-danger" value="{id_produit}" on:click={addToDictionary} >Acheter</button>