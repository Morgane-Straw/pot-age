import Link from "next/link";


export default function NavbarButton(props) {
    return (
        <Link href={props.href}>
            <a >
                {props.icon ? <i className={"fas "+props.icon}></i> : "s"}
                
                <span>{props.title}</span>
            </a>
        </Link>
    )
}