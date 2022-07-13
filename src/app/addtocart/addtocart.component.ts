import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  cartItems: number = 0;
  mugPrice: number = 299;
  isBtnAddDisabled: boolean = true;
  isBtnRemoveDisabled: boolean = true;
  userName: string = '';
  btnGreetDisabled: boolean =  true;
  btnClearDisabled: boolean = true;
  data: any;
  resultData: string | undefined;
  @Input() pname: any;
  @Input('prodName1') prodName1: string | undefined;
  @Input() set prodName2(val: string) {
    this.resultData = val;
  }
  @Output() sendData: EventEmitter<any> = new EventEmitter<any> ();
  @Output() customEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  addToCart() {
    
    if(this.cartItems > 4 ) {
      this.isBtnAddDisabled = false
    } else {
      this.cartItems = this.cartItems + 1
      this.isBtnRemoveDisabled = true
  } 
  }

  removeFromCart() {
    if(this.cartItems < 1) {
      this.isBtnRemoveDisabled = false
      this.isBtnAddDisabled = true
    } else {
      this.cartItems = this.cartItems - 1
      this.isBtnAddDisabled = true
    }
  }

  onUsername() {
    this.data = this.userName;
    this.userName = ''
  }

  onClear() {
    this.userName = ''
  }

  sendDataToParent() {
    this.sendData.emit("Data transfer to parent!!!!");
  }

  sentDataToParent() {
    this.customEvent.emit(new Date());
  }

}
