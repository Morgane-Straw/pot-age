import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function HomeNavBar(path) {
    const router = useRouter();
    const [white, setWhite] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {

            window.addEventListener("scroll", () => {
                if (window.scrollY > 485) {
                    setWhite(true);
                } else {
                    setWhite(false);
                }

            });
        }
    }
        , []);
    return <nav className={(white ? "bg-white text-primary" : "text-white") + " justify-content-between position-fixed z-index-top  d-flex flex-row  w-100 bg-transition text-transition"}>
        <span className="d-flex flex-row align-items-center px-2">
            <a className="navbar-brand nav-item px-3 cursor-pointer" onClick={() => router.push("/", undefined, { shallow: true })}>
                <div className='cf'>
                    <img className={'bottom w-logo'+ (white ? "" : " opacity-0")} src="/img/LogoBleu.svg" alt="Pot'Age" />
                    <img className={'top w-logo ' + (white ? " opacity-0" : "")} src="/img/LogoBlanc.svg" alt="Pot'Age" />
                </div>
            </a>
        </span>
        <span className="d-flex flex-row justify-content-end px-5">
            <a onClick={() => router.push("/login", undefined, { shallow: true })} className={'nav-button-home fw-bold fs-5 d-flex flex-column px-3 justify-content-center align-items-center cursor-pointer'}>
                Connexion
            </a>
            <a onClick={() => router.push("/inscription", undefined, { shallow: true })} className={'nav-button-home fw-bold fs-5 d-flex flex-column px-3 justify-content-center align-items-center cursor-pointer'}>
                Inscription
            </a>
        </span>
    </nav>
}