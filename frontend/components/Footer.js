import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function Footer(props) {
  const router = useRouter();
  return (
    <footer className="position-fixed bg-primary bottom-0 w-100 text-white d-flex flex-rox justify-content-between py-1 opacity-90">
      <span className="px-3  fs-5">Taille
        <span className="ps-3" ><button className="" onClick={()=>{props.setZoom(props.zoom-10);}}><i class="fas fa-minus footer-button-size p-1 rounded-circle border border-white"></i></button></span>
        <span className="ps-4" ><button className="" onClick={()=>{props.setZoom(props.zoom+10);}}><i class="fas fa-plus footer-button-size p-1 rounded-circle border border-white"></i></button></span>

      </span>
      <span className="px-3 fs-5">Aide
        <button className=" px-2"><i class="fas fa-question footer-button-size p-1 rounded-circle border border-white "></i></button>

      </span>
    </footer>
  )
}