import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formInput = {name:'', email:'', subject:'' ,message:'',whatsapp:''};
  public formMessage = {name:'', email:'', subject:'' ,message:'',whatsapp:''};
  public disabledButton = true;
  public submitOK = false;
  constructor() { }

  ngOnInit(): void {
  }

  resetForm(){
    this.formInput = {name:'', email:'', subject:'' ,message:'',whatsapp:''}
  }

  modelChange(value,formName){
    console.log('modelChange ==>',value,formName);
    
    if(formName == 'name'){
      if(value == '') this.formMessage.name = "Nama harus di isi"
      else this.formMessage.name = ''
    }if(formName == 'email'){
      if(value == '') this.formMessage.email = "Email harus di isi"
      else{
        if(!this.ValidateEmail(value))this.formMessage.email = "Format email salah"
        else this.formMessage.email = ''
      }
    }if(formName == 'whatsapp'){
      if(value == '') this.formMessage.whatsapp = "Nomor Whatsapp / telepon harus di isi"
      else{
        if(value.length < 10) this.formMessage.whatsapp = 'Nomor Whatsapp / telepon tidak valid'
        else this.formMessage.whatsapp = ''
      }
    }if(formName == 'message'){
      if(value == '') this.formMessage.message = "Pesan harus di isi"
      else this.formMessage.message = ''
    }



    if(this.formInput.name == '' || this.formInput.email == '' || this.formInput.whatsapp == '' || this.formInput.message == ''){
      this.disabledButton = true
    }else{
      this.disabledButton = false
    }
  
  }


  onSubmit(){
    this.submitOK = true

    

  }



  ValidateEmail(mail){
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))  {
    return true
  }
    return false
  }

  // [(ngModel)]="formMessage.name" (ngModelChange)="modelChange($event,'name')"


}



