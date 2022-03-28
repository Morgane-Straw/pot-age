import { useState,useEffect } from "react";

const BoutonParticiper = (props) =>{
    const[participe,setParticipe]=useState(props.participe?props.participe:false);
    useEffect(()=>{props.setParticipe(participe)},[participe])
    return <button className="button1 card-button1 rounded-1 bg-primary text-white text-center w-button-participer py-1" type="submit"
    onClick={()=>setParticipe(!participe)}>
        {participe?<span><i className='fas fa-check me-1'></i>Participe</span>:"Participer"}</button>;}
export default BoutonParticiper;