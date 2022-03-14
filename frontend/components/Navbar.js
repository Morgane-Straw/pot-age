import NavbarButton from "./NavbarButton";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function Navbar() {
  const [navbar, setNavbar] = useState(<></>);
  const router = useRouter();

  const [navType, setNavType] = useState(router.pathname == '/' ? 'home' : router.pathname == '/login' ? 'login' : router.pathname == '/inscription' ? 'inscription' : 'default')


  const DefaultNavBar = (path) =>
    <nav className=" bg-white justify-content-between position-relative z-index-top  d-flex flex-row position-fixed w-100">
      <span className="d-flex flex-row align-items-center">
        <a className="navbar-brand nav-item px-3" href="/">
          <img src="/img/LogoBleu.svg" alt="Pot'Age" className="w-logo" />
        </a>
        <a href="/proposer-evenement" passHref>
          <button className="nav-item btn-primary rounded h-button-event px-3 d-flex flex-row align-items-center">
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
    </nav>;

  const HomeNavBar = (path) =>
    <nav className="text-white justify-content-between position-fixed z-index-top  d-flex flex-row  w-100 ">
      <span className="d-flex flex-row align-items-center px-2">
        <a className="navbar-brand nav-item px-3" onClick={() => router.push("/", undefined, { shallow: true })}>
          <img src="/img/LogoBlanc.svg" alt="Pot'Age" className="w-logo" />
        </a>
      </span>
      <span className="d-flex flex-row justify-content-end px-5">
      <a onClick={() => router.push("/login", undefined, { shallow: true })} className={'nav-button-home fw-bold fs-5 d-flex flex-column px-3 justify-content-center align-items-center'}>
        Connexion
      </a>
      <a onClick={() => router.push("/inscription", undefined, { shallow: true })} className={'nav-button-home fw-bold fs-5 d-flex flex-column px-3 justify-content-center align-items-center'}>
        Inscription
      </a>
    </span>
    </nav>;
  const LoginNavbar = (path) => <nav className=" bg-white  justify-content-between position-relative z-index-top  d-flex flex-row position-fixed w-100">

    <span className="d-flex flex-row align-items-center px-2">
      <a className="navbar-brand nav-item px-3" onClick={() => router.push("/", undefined, { shallow: true })}>
        <img src="/img/LogoBleu.svg" alt="Pot'Age" className="w-logo" />
      </a>
    </span>
    <span className="d-flex flex-row justify-content-end px-5">
      <NavbarButton title="Accueil" href="/"><img src='/img/house-solid.svg' className="w-20px"></img></NavbarButton>
      <NavbarButton title="Inscription" href="/inscription" ><i className="fas fa-user"></i></NavbarButton>
    </span>

  </nav>;
  const SignInNavBar = (path) => <nav className=" bg-white
    justify-content-between  z-index-top d-flex flex-row position-fixed w-100">
    <span className="d-flex flex-row align-items-center px-2">
      <a className="navbar-brand nav-item px-3" onClick={() => router.push("/", undefined, { shallow: true })}>
        <img src="/img/LogoBleu.svg" alt="Pot'Age" className="w-logo" />
      </a>
    </span>
    <span className="d-flex flex-row justify-content-end px-5">
      <NavbarButton title="Accueil" href="/" ><img src='/img/house-solid.svg' className="w-20px"></img></NavbarButton>
      <NavbarButton title="Connexion" href="/login" ><i className="fas fa-user"></i></NavbarButton>
    </span>
  </nav>;
  useEffect(() =>
    setNavType(router.pathname == '/' ? 'home' : router.pathname == '/login' ? 'login' : router.pathname == '/inscription' ? 'inscription' : 'default')
    , [,router.pathname]); useEffect(() =>
      setNavbar(navType == 'home' ? HomeNavBar(router.pathname) : navType == 'login' ? LoginNavbar(router.pathname) : navType == 'inscription' ? SignInNavBar(router.pathname) : DefaultNavBar(router.pathname))
      , [navType]);

  return (<>
    {navbar}
  </>)
}
