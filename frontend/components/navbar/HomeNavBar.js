import { useRouter } from 'next/router';

export default function HomeNavBar(path) {
    const router = useRouter();
    return <nav className="text-white justify-content-between position-fixed z-index-top  d-flex flex-row  w-100 ">
        <span className="d-flex flex-row align-items-center px-2">
            <a className="navbar-brand nav-item px-3 cursor-pointer" onClick={() => router.push("/", undefined, { shallow: true })}>
                <img src="/img/LogoBlanc.svg" alt="Pot'Age" className="w-logo" />
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