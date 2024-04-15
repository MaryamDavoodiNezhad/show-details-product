import { Component } from '@angular/core';
import { Products, cameramodel } from '../../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
 
})
export class ProductListComponent {

  constructor(private Products:Products){
    this.cameras = Products.products
  }
cameras:cameramodel[];

}
