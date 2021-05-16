import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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


  public imageList = [
    { id:'img1',  imgLink:'./assets/img/img1.jpg' , desc:'Renovasi atap, kamar mandi, dapur dan pengecetan perumahan Bridgedown Tidar' },
    { id:'img2',  imgLink:'./assets/img/img2.jpg' , desc:'Pembongkaran rumah tua dan renovasi atap tingkat dua. Kacuk - Malang' },
    { id:'img3',  imgLink:'./assets/img/img3.jpg' , desc:'Renovasi perumahan Villa Puncak Tidar' },
    { id:'img4',  imgLink:'./assets/img/img4.jpg' , desc:'Pembangunan rumah. karang besuk' },
    { id:'img5',  imgLink:'./assets/img/img5.jpg' , desc:'Renovasi atap perumahan Panorama Garden. Kabupaten Malan' },
    { id:'img6',  imgLink:'./assets/img/img6.jpg' , desc:'Renovasi masjid dan pembangunan pondok pesantren sawojajar kota malang' },
    { id:'img7',  imgLink:'./assets/img/img7.jpg' , desc:'Renovasi masjid dan pembangunan pondok pesantren sawojajar kota malang' },
    { id:'img8',  imgLink:'./assets/img/img8.jpg' , desc:'Tim tukang dan pembantu tukang CV. Sabar JM kota Malang' },
    { id:'img9',  imgLink:'./assets/img/img9.jpg' , desc:'Renovasi rumah dan kamar mandi. Tidar - Malang' },
    { id:'img10',  imgLink:'./assets/img/img10.jpg' , desc:'Renovasi rumah Kost' },
    { id:'img11',  imgLink:'./assets/img/img11.jpg' , desc:'Renovasi rumah di perumahan Bridgestone' },
    { id:'img12',  imgLink:'./assets/img/img12.jpg' , desc:'Pembangunan rumah. Cemorokarang' },
  ]


  generateCaption(data){
    console.log('generateCaption ===>',data)
    $('#' + data.id).attr('data-caption', data.desc);
    $('#' + data.id).attr('href', data.imgLink);
  }
  

}
