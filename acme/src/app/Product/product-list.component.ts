import { Component, OnInit, Injectable } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
templateUrl:'./product-list.component.html'

})
@Injectable()
export class productlistComponent implements OnInit{
    pageTitle :string="Product List";
    imageWidth: number= 50;
    isImageShow: boolean = true;
    buttonText: string ="Show Image";
    ratingString:string;
    products: Iproduct [] =[];
    filteredProduct: Iproduct[];
    errorMessage: string;
    _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }
    
    set listFilter(value:string){
    this._listFilter=value;
    this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    constructor(private _productservice:ProductService){
    
        this.listFilter='cart';
    }
    performFilter(filterby:string):Iproduct[]{
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter((products: Iproduct)=>products.productName.toLocaleLowerCase().indexOf(filterby)!==-1); 
    }
    onratingclick(message:string):void{
        this.ratingString=message;
    }
        ngOnInit(): void{
            console.log("s");
            this._productservice.getproducts()
            .subscribe(products=>
                {
                    this.products=products;
                    this.filteredProduct= this.products;
                },
                error=>this.errorMessage=<any>error
            );
        }
    imageControl():void {
        this.isImageShow=!this.isImageShow;
        this.buttonText="Hide Image";
    }
}