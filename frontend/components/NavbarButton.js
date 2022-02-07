import Link from "next/link";


export default function NavbarButton(props) {
    return (
        <Link href={props.href} >
            <a className='d-flex  flex-column justify-content-center text-center'>
                {props.icon ? <i className={props.icon}></i> : "s"}
                
                <span>{props.title}</span>
            </a>
        </Link>
    )
}