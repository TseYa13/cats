import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'
import {products as data} from './data/products'
import { NgIf } from '@angular/common'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cats'

  products: IProduct[] = data
  isCollapsed : boolean = false;
  isBlack : boolean = false;
  isGrey : boolean = false;
  isWhite : boolean = false;
  isMix : boolean = false;
  All : boolean = true;
  AbesCat : boolean = false;
  AfricCat : boolean = false;
  StrtCat : boolean = false;
  constructor(){
}
toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
}
toggleCollapse1(){
  this.isBlack = !this.isBlack
}
toggleCollapse2(){
  this.isGrey = !this.isGrey
}
toggleCollapse3(){
  this.isWhite = !this.isWhite
}
toggleCollapse4(){
  this.isMix = !this.isMix
}
checkAll(){
  this.All = !this.All
}
Breed1(){
  this.AbesCat = !this.AbesCat
}
Breed2(){
  this.AfricCat = !this.AfricCat
}
Breed3(){
  this.StrtCat = !this.StrtCat
}
ngOnInit() {
  
}
}
