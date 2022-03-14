import NavbarButton from "./NavbarButton";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function Navbar() {
  const [navbar, setNavbar] = useState(<></>);
  const router = useRouter();

  const DefaultNavBar = (path) =>
    <nav className=" bg-light  justify-content-between  z-index-top  d-flex flex-row">
      <span className="d-flex flex-row align-items-center">
        <a className="navbar-brand nav-item px-3" href="/">
          <img src="/img/LogoBleu.svg" alt="Pot'Age" className="w-logo" />
        </a>
        <Link href="/proposer-evenement" passHref>
          <button className="nav-item btn-primary rounded h-button-event px-3 d-flex flex-row align-items-center">
            <i className="far fa-plus-square spacing-plus-button-event fs-5"></i>
            <span className="">Proposer un évènement</span>
          </button>
        </Link>
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
    </nav>;

  const HomeNavBar = (path) => <nav>Home</nav>;
  const LoginNavbar = (path) =>   <nav className=" bg-light  justify-content-between  z-index-top d-flex flex-row">
    <span className="d-flex flex-row align-items-center">
      <a className="navbar-brand nav-item px-3" href="#">
        <img src="/img/LogoBleu.svg" alt="Pot'Age" className="w-logo" />
      </a>
    </span>
    <span className="d-flex flex-row justify-content-end px-5">
      <NavbarButton title="Accueil" href="/"><img src='/img/house-solid.svg' className="w-20px"></img></NavbarButton>
      <NavbarButton title="Inscription" href="/inscription" ><i className="fas fa-user"></i></NavbarButton>
    </span>
  </nav>;
  const SignInNavBar = (path) =>   <nav className=" bg-light  justify-content-between  z-index-top d-flex flex-row">
  <span className="d-flex flex-row align-items-center">
    <a className="navbar-brand nav-item px-3" href="#">
      <img src="/img/LogoBleu.svg" alt="Pot'Age" className="w-logo" />
    </a>
  </span>
  <span className="d-flex flex-row justify-content-end px-5">
    <NavbarButton title="Accueil" href="/" ><img src='/img/house-solid.svg' className="w-20px"></img></NavbarButton>
    <NavbarButton title="Connexion" href="/login" ><i className="fas fa-user"></i></NavbarButton>
  </span>
</nav>;
  useEffect(() =>
    setNavbar(router.pathname == '/' ? HomeNavBar(router.pathname) : router.pathname == '/login' ? LoginNavbar(router.pathname) : router.pathname == '/inscription' ? SignInNavBar(router.pathname) : DefaultNavBar(router.pathname))
    , [router.pathname]);

  return (<>
    {navbar}
  </>)
}
