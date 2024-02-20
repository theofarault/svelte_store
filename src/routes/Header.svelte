<script>
  //import { Link } from 'svelte-routing';
  import { page } from '$app/stores';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Badge from '@smui-extra/badge';


  import { compteur } from './compteur.js';

  let count_value;

  compteur.subscribe(dictionary => {
    //console.log(dictionary);
    var count = Object.keys(dictionary).length;
    count_value = count;
  });

  let align = 'bottom-start';
  let position = 'middle';


  //gestion du bouton recherche
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let searchTerm = '';

  function search() {
    console.log("search : " + searchTerm)
    dispatch('search', searchTerm);
  }

</script>

<div class="">

    <nav class="navbar navbar-expand-lg navbar-light bg-light m-2">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item active" aria-current={$page.url.pathname === '/all_categories' ? 'page' : undefined}>
              <a class="nav-link" href="/all_categories">Catégories</a>
            </li>
            <li class="nav-item active" aria-current={$page.url.pathname === '/all_mannequins' ? 'page' : undefined}>
              <a class="nav-link" href="/all_mannequins">Mannequins</a>
            </li>
          </ul>

        </div>

        <div class="col-6">
          <div class="d-flex justify-content-left">
            <form class="d-flex form-center my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" bind:value={searchTerm} >
              <button class="btn btn-outline-success my-2 my-sm-0" on:click={search}>Search</button>
            </form>
          </div>
        </div>


        <div>
          <a  href="/panier">
            <button class="relative mr-4 ml-4 btn btn-secondary p-1" style="position: relative;">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" stroke="#fff"><path
                  d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /><path d="M1 5H19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path
                  d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg>

                <Badge {position} {align} aria-label="unread count">{count_value}</Badge>
                  
              </button>
            </a>
        </div>

      </nav>
    
    </div>