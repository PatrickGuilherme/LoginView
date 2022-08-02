import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public LoginForm:FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required])
    });
  }
  
  //Validação do e-mail
  public EmailInvalid():string {
    if(this.LoginForm.getError("required","email") && this.LoginForm.get("email").touched) {
      return "Preencha o e-mail";
    }else if(this.LoginForm.getError("email","email") && this.LoginForm.get("email").touched) {
      return "E-mail inválido, tente novamente";
    }else {
      var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      if(!regex.test(this.LoginForm.value.email) && this.LoginForm.get("email").touched) {
        return "E-mail inválido, tente novamente";
      }
    }
    return null;
  }

  //Validação da senha
  public PasswordInvalid():string {
    if(this.LoginForm.getError("required","password") && this.LoginForm.get("password").touched) {
      return "Preencha a senha";
    }
    return null;
  }

  public Login():void {}
}
