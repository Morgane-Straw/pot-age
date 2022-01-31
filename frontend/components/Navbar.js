import NavbarButton from "./NavbarButton";
import {loupe_bleue} from "../src/img/loupe_bleue.png";

export default function Navbar() {
    return (
    <nav>
      <button>
        Proposer un évènement
      </button>
      <NavbarButton title="Rechercher un évènement" href ="/mes-evenements" src="/src/img/loupe_bleue.png"></NavbarButton> 
      <NavbarButton title="Mes évenements" href="/mes-evenements" src="/src/img/loupe_bleue.png"></NavbarButton>    
      <NavbarButton title="Favoris" href="/en-chantier" src="/src/img/loupe_bleue.png"></NavbarButton>    
      <NavbarButton title="Actualités" href="/actualites" src="/src/img/loupe_bleue.png"></NavbarButton>    
      <NavbarButton title="Messages" href="/en-chantier" src="/src/img/loupe_bleue.png"></NavbarButton>    
      <NavbarButton title="Mon compte" href="/mon-compte" ssrc="/src/img/loupe_bleue.png"></NavbarButton>    
    </nav>
    )
  }