// export default function Login() {
  import React from 'react';
  import Image from "next/image"
  import Head from "next/head"
  
  export default class Login extends React.Component {
  
  constructor(props) {
   super(props);
   this.state = {
     hidden: true,
     password: '',
   };
   this.handlePasswordChange = this.handlePasswordChange.bind(this);
   this.toggleShow = this.toggleShow.bind(this);
  }
  handlePasswordChange(e) {
   this.setState({ password: e.target.value });
  }
  toggleShow() {
   this.setState({ hidden: !this.state.hidden });
  }
  
  
  render (){
  
  return (
  <div className ="App">
        <div id='section1'>
          <div className='container'>
            <div className='col-md-4 pt-5 pb-5'>
              <h1 className='h1 text-white'>Le réseau d'évènements pour toutes les générations</h1>
              <p className='text-white lead'>Pot'Âgé est le premier réseau social intergénérationnel plaçant les seniors au coeur de la démarche. Notre réseau social s'inscrit dans une démarche de création de liens durables entre les séniors et les plus jeunes.</p>
              <a className='btn btn-primary'>En savoir plus</a>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row gx-5 mt-5'>
            <div className='col-md-4'>
              <img src='/img/vitrine1-carre.jpg' className='img-fluid mb-3'></img>
            </div>
            <div className='col-md-8'>
              <h2 className='h2 text-primary'>Senior ?</h2>
              <p>Vous souhaitez vous engager au sein de votre quartier ? Vous souhaitez transmettre votre savoir faire aux plus jeunes ? Pot’Âgé vous permet de proposer vos évènements auprès des plus jeunes dans votre quartier !</p>
              <h3 className='h4 text-primary'>Comment ça marche ?</h3>
              <img src='/img/Groupe 311.svg' className='img-fluid'></img>
            </div>
          </div>
          <div className='row gx-5 mt-5'>
            <div className='col-md-4 order-md-1'>
                <img src='/img/vitrine2-carre.jpg' className='img-fluid mb-3'></img>
            </div>
            <div className='col-md-8 order-md-0'>
              <h2 className='h2 text-primary'>Famille ?</h2>
              <p>Vous souhaiter trouver des activités inhabituelles et gratuites pour vos enfants dans le quartier ? L'échange intergénérationnel est une valeur qui vous tiers à coeur ?</p>
              <h3 className='h4 text-primary'>Comment ça marche ?</h3>
              <img src='/img/Groupe 312.svg' className='img-fluid'></img>
            </div>
          </div>
          <div className='row gx-5 mt-5'>
            <div className='col-md-4'>
              <img src='/img/vitrine3-carre.jpg' className='img-fluid mb-3'></img>
            </div>
            <div className='col-md-8'>
              <h2 className='h2 text-primary'>Etablissement ?</h2>
              <p>EHPAD, école, centre de loisirs vous souhaitez favoriser le lien intergénérationnel ? Pot1 Agé vous permet d'organiser des évènements au sein de votre établissement.</p>
              <h3 className='h4 text-primary'>Comment ça marche ?</h3>
              <img src='/img/Groupe 313.svg' className='img-fluid'></img>
            </div>
          </div>
        </div>
  </div>
  );}}