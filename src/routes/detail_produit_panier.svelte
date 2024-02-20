<script>
    export let produit_id;
    export let quantite_produit;

    import Paper, { Title, Content } from '@smui/paper';
    import { onMount } from 'svelte';

    // Déclarer une variable pour stocker les données récupérées de l'API
    let data = null;

    // Fonction pour charger les données depuis l'API
    async function loadData() {
        try {
        // Effectuer une requête HTTP GET à l'API
        //console.log('https://api.escuelajs.co/api/v1/products/' + produit_id)
        const response = await fetch('https://api.escuelajs.co/api/v1/products/' + produit_id);
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

     // Exécuter la fonction de chargement des données au montage du composant
    //loadData();

</script>

{#await loadData()}
	<p>Fetching data...</p>
{:then res}
    <Paper color="primary" variant="outlined" class="m-2">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <Title>{res.title}</Title>
                    <Content>Prix: {res.price} €</Content>
                    <Content>Quantité: {quantite_produit}</Content>
                </div>
                <div class="col-6">
                    {#if data.images.length> 0}
                        <img class="w-25" src="{data.images[0]}" alt="{data.images[0]}">
                    {:else}
                        <p>Aucune images disponible</p>
                    {/if}
                </div> 
            </div>
        </div>
        
    </Paper>
{:catch error}
    <p>Aucun article trouvé</p>
{/await}

