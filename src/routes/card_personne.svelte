<script>
    export let person;

    import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';

</script>

<div class="card-container w-25 m-2">
    <Card>
    <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({person.avatar});">
        <MediaContent>
        <h2
            class="mdc-typography--headline6"
            style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
        >
            {person.name}
        </h2>
        </MediaContent>
    </Media>
    
    </Card>
</div>
