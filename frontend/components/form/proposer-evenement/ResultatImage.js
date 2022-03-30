import { useEffect, useState } from "react"

export default function ResultatImage(props) {
    return <>
        <img src={props.src.small}
            onClick={() => props.setChoixImg(props.src)}
            className={"h-img-banque m-2 cursor-pointer rounded-3  " + (props.choixImg.raw == props.src.raw ? "shadow-selected" : "")}>
        </img></>
}
