// export default function Login() {
import React from 'react';
import Image from "next/image"
import Head from "next/head"
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login(props) {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  const [hidden, setHidden] = useState(true);
  const [password, setPassword] = useState('');
  const router = useRouter();


  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function toggleShow() {
    setHidden(!hidden);
  }


  return (<>
    <Head>
      <meta charSet="utf-8" />
      <title>Pot-Age</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
    </Head>

    <div className="container">
      <div className="row justify-content-center">
        <div className="d-none d-lg-block col-xl-6 col-lg-7">
          <img src="/img/login.svg" alt="illustration personne avec smartphone" />
        </div>
        <div className="col-lg-5 col-xl-6 col">
          <div className="shadow rounded p-5 mt-5">
            <h1 className="text-primary h1"><strong>Bienvenue&nbsp;!</strong></h1>
            <p>Entrez votre email et votre mot de passe pour accéder à votre compte.</p>
            <form method="post" action="">

              <i className="fa fa-mail"></i><label htmlFor="Email">Email</label>
              <input className="form-control" type="text" name="Email" placeholder="Email" id="Email" />

              <label htmlFor="pass">Mot de passe</label>
              <div className="input-group">
                <input className="form-control" type={hidden ? 'password' : 'text'} value={password}
                  onChange={handlePasswordChange} name="pass" placeholder="Mot de passe" id="pass" />
                <div className="input-group-text">
                  <i onClick={toggleShow} className="fas fa-eye"></i>
                </div>
              </div>

              <div className="row d-flex flex-row justify-content-center">
                <div className="col-auto form-check text-left px-3 py-2">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">Se souvenir de moi</label>
                </div>


                <div className="col-auto text-right">
                  <a className="btn btn-link text-left text-primary px-3 py-2"  onClick={() => {router.push("/mdpoublie", undefined, { shallow: true });}}>Mot de passe oublié&nbsp;?</a>
                </div>
              </div>

              <div className="button text-right text-center">
                <a className="btn btn-primary btn-lg col-8" onClick={() => {router.push("/rechercher-evenement", undefined, { shallow: true });}}>Connexion</a>
              </div>

              <h6 className="text-center"><strong>OU</strong></h6>

              <div className="button text-center">
                <a className="btn btn-outline-primary btn-lg col-8"  onClick={() => {router.push("/inscription", undefined, { shallow: true });}}>Pas encore de compte&nbsp;? </a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

// }
