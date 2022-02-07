import NavbarButton from "./NavbarButton";
import {loupe_bleue} from "../src/img/loupe_bleue.png";

export default function Navbar() {
    return (
    <nav>
      <button>
        Proposer un évènement
      </button>
      <NavbarButton title="Rechercher un évènement" href ="/mes-evenements" icon="fa-home"></NavbarButton> 
      <NavbarButton title="Mes évenements" href="/mes-evenements" icon="fa-home"></NavbarButton>    
      <NavbarButton title="Favoris" href="/en-chantier" icon="fa-home"></NavbarButton>    
      <NavbarButton title="Actualités" href="/actualites" icon="fa-home"></NavbarButton>    
      <NavbarButton title="Messages" href="/en-chantier" icon="fa-home"></NavbarButton>    
      <NavbarButton title="Mon compte" href="/mon-compte" icon="fa-home"></NavbarButton>    
    </nav>
    )
  }