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
       var txt_titre = "Le réseau d'évènements pour toutes les générations";

       var txt_desc = "Pot'Âgé est le premier réseau social intergénérationnel plaçant les seniors au coeur ";
       txt_desc = txt_desc+"de la démarche. Notre réseau social s'inscrit dans une démarche de création de liens durables ";
       txt_desc = txt_desc+"entre les séniors et les plus jeunes.";

       var txt_plus = "En savoir plus";

       var txt_question_1 = "Vous souhaiter trouver des activités inhabituelles et gratuites pour vos enfants dans le quartier ? ";
       txt_question_1 = txt_question_1+"L'échange intergénérationnel est une valeur qui vous tiers à coeur ?";

       var txt_question_2 = "Comment ça marche ?";

       var txt_question_3 = "EHPAD, école, centre de loisirs vous souhaitez favoriser le lien intergénérationnel ? ";
      txt_question_3 = txt_question_3+"Pot1 Agé vous permet d'organiser des évènements au sein de votre établissement.";


  return (
  <div className ="App">
        <div id='section1'>
          <div className='container'>
            <div className='col-md-4 pt-5 pb-5'>
              <h1 className='h1 text-white'>{txt_titre}</h1>
              <p className='text-white lead'>{txt_desc}</p>
              <a className='btn btn-primary'>{txt_plus}</a>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row gx-5 mt-5'>
            <div className='col-md-4'>
              <img src='/img/vitrine1-carre.jpg' className='img-fluid mb-3 ' alt="Todo"/>
            </div>
            <div className='col-md-8'>
              <h2 className='h2 text-primary'>Senior ?</h2>
              <p>Vous souhaitez vous engager au sein de votre quartier ? Vous souhaitez transmettre votre savoir faire aux plus jeunes ? Pot’Âgé vous permet de proposer vos évènements auprès des plus jeunes dans votre quartier !</p>
              <h3 className='h4 text-primary'>Comment ça marche ?</h3>
              <img src='/img/Groupe 311.svg' className='img-fluid cover' alt="Todo" />
            </div>
          </div>
          <div className='row gx-5 mt-5'>
            <div className='col-md-4 order-md-1'>
                <img src='/img/vitrine2-carre.jpg' className='img-fluid mb-3 cover' alt="Todo" />
            </div>
            <div className='col-md-8 order-md-0'>
              <h2 className='h2 text-primary'>Famille ?</h2>
              <p>{txt_question_1}</p>
              <h3 className='h4 text-primary'>{txt_question_2}</h3>
              <img src='/img/Groupe 312.svg' className='img-fluid cover' alt="1 Je m'inscris, 2 Je cherche des évènements qui pourraient plaire à mes enfants, 3 J'inscris mes enfants à une activité ou je poste une demande d'activité si je n'ai pas trouvé celle qui me correspond, 4 Mes enfants partagent une activité conviviale et construisent de nouveaux liens" />
            </div>
          </div>
          <div className='row gx-5 mt-5'>
            <div className='col-md-4'>
              <img src='/img/vitrine3-carre.jpg' className='img-fluid mb-3 cover' alt="grand père avec sa petite fille" />
            </div>
            <div className='col-md-8'>
              <h2 className='h2 text-primary'>Etablissement ?</h2>
              <p>{txt_question_3}</p>
              <h3 className='h4 text-primary'>Comment ça marche ?</h3>
              <img src='/img/Groupe 313.svg' className='img-fluid cover' alt="Todo" />
            </div>
          </div>
        </div>
  </div>
  );}}
