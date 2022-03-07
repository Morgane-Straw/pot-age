import NavbarButton from "./NavbarButton";
import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="d-flex flex-row align-items-end">
      <img src='img/LogoBleu.svg' alt="Pot'Age"></img>
      <Link href="/proposer-evenement">
        <button className="btn-primary d-flex  flex-row justify-content-center align-items-center text-center">
        <i className="far fa-plus-square "></i>
        <span className="">Proposer un évènement</span>
        </button>
      </Link>
      <NavbarButton title="Rechercher un évènement" href ="/mes-evenements" icon="fas fa-search"></NavbarButton> 
      <NavbarButton title="Mes évenements" href="/mes-evenements" icon="fas fa-flag"></NavbarButton>    
      <NavbarButton title="Favoris" href="/en-chantier" icon="fas fa-heart"></NavbarButton>    
      <NavbarButton title="Actualités" href="/actualites" icon="fas fa-book-open"></NavbarButton>    
      <NavbarButton title="Messages" href="/en-chantier" icon="fas fa-envelope"></NavbarButton>    
      <Link href='/mon-compte'>
            <a className='d-flex  flex-column justify-content-center text-center'>
                <img></img>
                
                <span>Mon compte</span>
            </a>
        </Link>
    </nav>
    )
  }