import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


export default function NavbarButton(props) {
    const router = useRouter();
    const rawButton =
        <a onClick={()=>router.push(props.href,undefined, { shallow: true }) }className={'nav-button d-flex flex-column text-primary px-3 justify-content-center align-items-center cursor-pointer'}>
            <span className="fs-5">
                {props.children}
            </span>
            <span>{props.title}</span>
        </a>
    ;
    const [button, setButton] = useState(rawButton);

    useEffect(() => (props.href == router.pathname ? setButton(<span className="active d-flex flex-column justify-content-center ">{rawButton}</span>) : setButton(rawButton)), [router.pathname]);
    return (
        button
    )
}