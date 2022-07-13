import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  productName: string = '';
  pname1: string = "Car (product name from parent)";
  pname2: string = "Bus (product from parent with set method)"
  productList: any = [];
  viewmode: string = 'productDetails';
  showToggle = false;
  constructor() {   }

  ngOnInit(): void {
  }

  onAddProduct() {
    this.showToggle = !this.showToggle
    this.productList.push(this.productName);
    this.productName = ''
  }

  receiveData(event: any) {
    console.log("Received Data from Child:" + event);
  }

  getDataFromChild(event: any) {
    console.log("Received Data from Child:::" + event)
  }

}
