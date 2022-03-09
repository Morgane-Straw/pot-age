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
          <div className='col-4'>
            <h1 className='text-white'>Le réseau d'évènements pour toutes les générations</h1>
            <p className='text-white'>Pot'Âgé est le premier réseau social intergénérationnel plaçant les seniors au coeur de la démarche. Notre réseau social s'inscrit dans une démarche de création de liens durables entre les séniors et les plus jeunes.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-9'></div>
        </div>
        <div className='row bg-light'>
          <div className='col-9'></div>
          <div className='col-3'></div>
        </div>
  </div>
  );}}