import NavbarButton from "./NavbarButton";
import { useRouter } from 'next/router';

export default function SignInLoginNavBar() {
    const router = useRouter();
    return <nav className=" bg-white
    justify-content-between  z-index-top d-flex flex-row position-fixed w-100">
        <span className="d-flex flex-row align-items-center px-2">
            <a className="navbar-brand nav-item px-3" onClick={() => router.push("/", undefined, { shallow: true })}>
                <img src="/img/LogoBleu.svg" alt="Pot'Age" className="w-logo" />
            </a>
        </span>
        <span className="d-flex flex-row justify-content-end px-5">
            <NavbarButton title="Accueil" href="/" ><img src='/img/house-solid.svg' className="w-20px"></img></NavbarButton>
            {router.pathname == '/inscription' ?
                <NavbarButton title="Connexion" href="/login" ><i className="fas fa-user"></i></NavbarButton>
                : <NavbarButton title="Inscription" href="/inscription" ><i className="fas fa-user"></i></NavbarButton>
            }    </span>
    </nav>;
}