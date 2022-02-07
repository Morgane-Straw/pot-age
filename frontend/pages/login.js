// export default function Login() {
  import React from 'react';
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEye } from "@fortawesome/free-solid-svg-icons";
  const eye = <FontAwesomeIcon icon={faEye} />;

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
    <div ClassName ="App">
    <html className="bg-body">
    <head>
      <meta charset="utf-8" />
      <title>Pot-Age</title>
    </head>
  
    <body className="bg-body">
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
          <h1 className="h1 color-primary"> <strong>  Bienvenue </strong> </h1>
          <form method="post" action="">
              <label for="Email"></label>
              <input className="form-control" type="text" name="Email" placeholder="Email" id="Email" />
              <label htmlFor="pass"></label>
              <div className="input-group">
                <input className="form-control" type={this.state.hidden ? 'password' : 'text'} value={this.state.password}
            onChange={this.handlePasswordChange} name="pass" placeholder="Mot de passe" id="pass" />
                <div className="input-group-text">
                  <i onClick={this.toggleShow}>{eye}</i>
                </div>
              </div>
  
              <div class="form-check text-left ">
        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
        <label class="form-check-label" for="dropdownCheck">
          Se souvenir de moi
        </label>
       </div>
              <div className="text-left mb-4">
                <a className="btn btn-link text-left color-primary" href="/mdpoublie">Mot de passe oublié ?</a>
              </div>
              <div className="button">
              <button className="btn btn-primary btn-lg " type="submit">Connexion</button>
            </div>
            <br />
          <h6 className="color-primary"> <strong>     OU   </strong>    </h6>
          <br />
          <br />
            <div className="button">
              <a className="btn btn-primary btn-lg" href="./Inscription">S'incrire </a>
            </div>
        </form>
      </div>
    </div>
    </div>
    </body>
  </html></div>
  );}}
  // }
  
