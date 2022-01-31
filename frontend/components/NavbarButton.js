import Link from "next/link";


export default function NavbarButton(props) {
    return (
        <Link href={props.href}>
            <a >
                {props.src ? <img src={props.src} /> : "s"}
                
                <span>{props.title}</span>
            </a>
        </Link>
    )
}