import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toPageScroll(id){
    console.log('to ',id)
    $('html, body').animate({
        scrollTop: $("#"+id).offset().top
    }, 2000);

    this.btnCloseMenu()
  }
    
  btnCloseMenu(){
    console.log('btnCloseMenu ',)

    $('#btnCloseMenu').click();
  }


}
