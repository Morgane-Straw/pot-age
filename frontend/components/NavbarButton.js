import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


export default function NavbarButton(props) {
    const router = useRouter();
    const rawButton = <Link href={props.href} >
        <a className={'nav-button d-flex flex-column text-primary px-3 justify-content-center align-items-center'}>
            <span className="fs-5">
                {props.children}
            </span>
            <span>{props.title}</span>
        </a>
    </Link>;
    const [button, setButton] = useState(rawButton);

    useEffect(() => (props.href == router.pathname ? setButton(<span className="active">{rawButton}</span>) : setButton(rawButton)), [router.pathname]);
    return (
        button
    )
}