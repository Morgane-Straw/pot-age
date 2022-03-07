import NavbarButton from "./NavbarButton";
import Link from "next/link";
import Image from "next/image"


export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav nav-pills nav-fill">
      <a className="navbar-brand nav-item" href="#">
          <Image src="/img/LogoBleu.svg" alt="Pot'Age" height="32" layout="fill "/>
     </a>
      <Link href="/proposer-evenement" passHref>
        <button className="nav-item btn-primary">
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
            <a className='nav-item'>
               {/*<Image src="/Todo" alt="TODO" layout="fill"/> */}

                <span>Mon compte</span>
            </a>
        </Link>
    </nav>
    )
  }
