export default function Label(props) {
    return <label className="text-primary fw-bold" htmlFor={props.id}>
        <span className={props.children ? 'mx-2' : 'me-1'}>{props.children}</span>{props.label}
    </label>
}