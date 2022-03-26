  import React from 'react';
  import Image from "next/image"
  import Head from "next/head"

export default function RechercherEvenement() {
  return (<>
    <div>Rechercher un évènement
    <link rel="stylesheet" href="globals.css" />
    <div class="card">
        <div class="card-image"><img src="/img/Sport_basketball.jpg" width="300" height="200" alt="Illustratio garçon jouant au basketball" /></div>

        <div class="card-body">

            <div class="card-name">
                <h2>Basketball</h2>
            </div>

            <div class="card-description">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aofficiis! Aniectetur unde autem inventore.</p>
            </div>
            <div class="card-button1">
              <button className="button1" type="submit">Consulter</button>
            </div>

            <div class="card-button2">
              <button className="button1"><img src="/img/Coeur_Blanc.png" height ="17" width="17" />Ajouter aux favoris</button>
            </div>

        </div>
</div>
    </div>
  </>
  )
}


