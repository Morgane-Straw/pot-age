import NavbarButton from "./NavbarButton";

export default function DefaultNavBar(path)
   { return <nav className=" bg-white justify-content-between position-relative z-index-top  d-flex flex-row position-fixed w-100">
      <span className="d-flex flex-row align-items-center">
        <a className="navbar-brand nav-item px-3 cursor-pointer" href="/">
          <img src="/img/LogoBleu.svg" alt="Pot'Age" className="w-logo" />
        </a>
        <a href="/proposer-evenement" passHref>
          <button className="nav-item btn-primary rounded h-button-event px-3 d-flex flex-row align-items-center ">
            <i className="far fa-plus-square spacing-plus-button-event fs-5"></i>
            <span className="">Proposer un évènement</span>
          </button>
        </a>
      </span>
      <span className="d-flex flex-row justify-content-end ">
        <NavbarButton title="Rechercher un évènement" href="/rechercher-evenement" ><i className="fas fa-search"></i></NavbarButton>
        <NavbarButton title="Mes évenements" href="/mes-evenements"><i className="fas fa-flag"></i></NavbarButton>
        <NavbarButton title="Favoris" href="/en-chantier" ><i className="fas fa-heart"></i></NavbarButton>
        <NavbarButton title="Actualités" href="/actualites" ><i className="fas fa-book-open"></i></NavbarButton>
        <NavbarButton title="Messages" href="/en-chantier" ><i className="fas fa-envelope"></i></NavbarButton>
        <NavbarButton title="Mon compte" href='/mon-compte'>
          <img className="w-30px h-30px rounded-circle" src="/img/kelly.jpg" alt="photo de profil" layout="fill" />
        </NavbarButton>
      </span>
    </nav>
}