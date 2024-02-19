    <div class="card-container w-25 m-2">
      <Card>
        <a href="/produit/{produit.id}" style="text-decoration: none;">
        <PrimaryAction>
          <Media aspectRatio="16x9" style="background-image: url({imageURL});"/>
          <Content class="mdc-typography--body2">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                {produit.title}
            </h2>
            {produit.price} €
          </Content>
        </PrimaryAction>
      </a>
        <Actions>

          <ActionButtons>
            <Button on:click={() => clicked++}>
              <Label>Action</Label>
            </Button>
            <Button on:click={() => clicked++}>
              <Label>Another</Label>
            </Button>
          </ActionButtons>

          <ActionIcons>
            <IconButton
              on:click={() => clicked++}
              toggle
              aria-label="Add to favorites"
              title="Add to favorites"
            >
              <Icon class="material-icons" on>favorite</Icon>
              <Icon class="material-icons">favorite_border</Icon>
            </IconButton>
            <IconButton
              class="material-icons"
              on:click={() => clicked++}
              title="Share">share</IconButton
            >
            <IconButton
              class="material-icons"
              on:click={() => clicked++}
              title="More options">more_vert</IconButton
            >
          </ActionIcons>

        </Actions>
      </Card>
    </div>

    
  <script lang="ts">
    import Card, {
      Content,
      PrimaryAction,
      Media,
      MediaContent,
      Actions,
      ActionButtons,
      ActionIcons,
    } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import IconButton, { Icon } from '@smui/icon-button';
  
    let clicked = 0;
    

    export let produit;
    let imageURL = produit.images[0].replace("[", "");

    import 'bootstrap/dist/css/bootstrap.min.css';
  </script>
  
  <style>
    * :global(.card-media-16x9) {
      background-image: url({produit.images[0]});
    }
  </style>