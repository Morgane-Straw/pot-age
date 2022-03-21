export default function BoutonProgression(props){
    return <button className={" d-block rounded py-1 px-2 w-button"+(props.label=="Retour" ?" border border-primary text-primary":" bg-primary text-white")}>
        {props.label=="Retour"? <span><i className="fas fa-angle-left pe-2"></i>{props.label}</span>
        : props.label=="Suivant"? <span>{props.label}<i className="fas fa-angle-right ps-2"></i></span> : <span>{props.label}</span> }
        
        
        </button>
}