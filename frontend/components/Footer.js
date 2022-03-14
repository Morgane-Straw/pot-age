import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function Footer(props) {
  const router = useRouter();
  return (
    <footer className="position-fixed bg-primary bottom-0 w-100 text-white d-flex flex-rox justify-content-between py-1">
      <span className="px-3  fs-5">Taille
        <button className="button-unset ps-3" onClick={()=>{props.setFontSize(props.fontSize-1);}}><i class="fas fa-minus footer-button-size p-1 rounded-circle border border-white"></i></button>
        <button className="button-unset ps-4" onClick={()=>{props.setFontSize(props.fontSize+1);}}><i class="fas fa-plus footer-button-size p-1 rounded-circle border border-white"></i></button>
      </span>
      <span>{props.fontSize}</span>
      <span className="px-3 fs-5">Aide
        <button className="button-unset px-2"><i class="fas fa-question footer-button-size p-1 rounded-circle border border-white "></i></button>

      </span>
    </footer>
  )
}