
export default function BoutonProgression(props){
    return <button 
    className={"d-flex justify-content-center d-block rounded py-1 px-3 w-button"+(props.label=="Retour" ?" border border-primary text-primary":" bg-primary text-white")}
    onClick={()=>{props.label=="Retour"? props.onClick(props.pageActive-1): props.label=="Suivant"? props.onClick(props.pageActive+1):  props.onClick()}  }
    type="button"
    >
        {props.label=="Retour"? <span><i className="fas fa-angle-left pe-3"></i>{props.label}</span>
        : props.label=="Suivant"? <span>{props.label}<i className="fas fa-angle-right ps-3"></i></span> : <span>{props.label}</span> }
        </button>
}