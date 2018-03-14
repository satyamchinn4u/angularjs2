import { Component } from "@angular/core";
import { Iproduct } from "./product";


@Component({
    selector:'pm-pdetails',
    template:`<div class="panel panel-primary" ngIf='product'>
    <div class="panel-heading">
    {{pageTitle + product.productname}}
    </div>
    </div>`
})
export class ProductDetailsComponent{
product: Iproduct
}