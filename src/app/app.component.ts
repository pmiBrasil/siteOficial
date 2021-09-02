import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  public formulario: FormGroup; // formulario em questão
  title = 'PMI-BRASIL';
  retornoEmail: any;
  buttonClicked: any = false;
  constructor(private formBuilder: FormBuilder,) { }
  ngOnInit(): void {
    window.addEventListener('scroll', function(): void {
      if (window.scrollY > 400) {
        document.getElementById('mainNav').classList.add('navbar-shrink');
      } else {
        document.getElementById('mainNav').classList.remove('navbar-shrink');
      }
    });
    this.formulario = this.formBuilder.group({
      nome: null,
      email: null,
      phone: null,
      mensagem: null

    })

  }

  public sendEmail() {
    this.buttonClicked = true

    let templateParams = {
      name: this.formulario.value.nome,
      email: this.formulario.value.email,
      phone: this.formulario.value.phone,
      message: this.formulario.value.mensagem
  };
    emailjs.send('service_ky8533w', 'template_xmax7ib', templateParams, 'user_Z1dDHx8QbR6h6dQTzAKYB')
      .then((result: EmailJSResponseStatus) => {
       alert("Contato enviado com Sucesso, em breve retornaremos no seu amail ")
        // console.log(result.text);
        this.retornoEmail = true;
      }, (error) => {
        console.log(error.text);
        this.retornoEmail = false;
      });
  }


}
