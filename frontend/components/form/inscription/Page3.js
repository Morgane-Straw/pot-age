import TextInput from "../TextInput";

export default function Page3(props){
    const today=()=>{
        const d= new Date();
        return d.getDate()+"/"+(d.getMonth()+1)+'/'+(1900+d.getYear());
    };
    return<>
    <div className="flex-basis-50">
        
    </div>
    <div className="flex-basis-50 pe-5">
    <TextInput id="nom" label="Nom"></TextInput>
    <TextInput id="prenom" label="Prénom"></TextInput>
    <TextInput id="date-de-naissance" label="Date de naissance" placeholder={today()}></TextInput>
    <TextInput id="ville" label="Ville de résidence"></TextInput>

    </div>
    </>
}