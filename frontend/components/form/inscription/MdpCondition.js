export default function MdpCondition(props) {
    return <div className={"text-mdp-" + (props.active ? "ok" : "gray")+ (props.wide?" flex-basis-100":" flex-basis-50")}>
        <i className={"fas fa-check p-1 rounded-circle text-white fs-mdp-icon mx-1 bg-mdp-" + (props.active ? "ok" : "gray")}></i>
        {props.children}
    </div>
}