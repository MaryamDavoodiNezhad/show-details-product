import { Injectable } from "@angular/core";

export interface cameramodel{
    id:number;
    name:string;
    image:string;
}

@Injectable()
export class Products{
    static find(arg0: (product: { id: string | null; }) => boolean): cameramodel | undefined {
      throw new Error('Method not implemented.');
    }
    products:cameramodel[]=[
        {id:10, name:'camera1', image:'./assets/images/camera1.jpg'},
        {id:11, name:'camera2', image:'./assets/images/camera4.jpg' },
        {id:12, name:'camera3', image:'./assets/images/camera3.jpg' },
        {id:13, name:'camera4', image:'./assets/images/camera5.webp' }

    ]

    find(id:number):cameramodel | undefined {
        return this.products.find(product => product.id === id)
    }
}