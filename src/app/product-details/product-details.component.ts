import { Component, OnInit } from '@angular/core';
import { Products, cameramodel } from '../../products'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product:cameramodel | undefined;

  constructor(private route:ActivatedRoute, private productService:Products){}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails():void{
         // First get the product id from the current route.
         const routeParams = this.route.snapshot.paramMap;
         const productIdFromRoute =Number( routeParams.get('id'));
     
          // Find the product that correspond with the id provided in route.
          this.product = this.productService.find(productIdFromRoute)
          //console.log(this.product?.id)
  }



  }

 


